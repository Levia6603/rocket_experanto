import { useEffect, useState } from "react";
import { Container, List, Title, Wrapper } from "./styles";
import axios from "axios";
import apiBase from "../../Api";
import { Btn } from "../../styles/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/loadingState/loadingState";
import { RootStateType } from "../../../redux";
import Loading from "../../components/Loading";
import EmptyData from "../../components/EmptyData";

interface ExchangeData {
  exchangeId: number;
  finishDate: string;
  initiatorAvatar: string;
  initiatorId: number;
  initiatorName: string;
  receiverAvatar: string;
  receiverId: number;
  receiverName: string;
  tittle: string;
}

function CommentList() {
  const [dataList, setDataList] = useState<ExchangeData[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );

  async function getList() {
    dispatch(setLoading(true));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const data: ExchangeData[] = await axios
        .get(apiBase.GET_RATING_LIST, { headers })
        .then((res) => {
          if (res.data.Message === "請重新登入") {
            alert("登入逾時，請重新登入");
            navigate("/login");
            return;
          }
          return res.data.list;
        });
      setDataList(data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      {loadingState && <Loading />}
      {!loadingState && dataList && (
        <Wrapper>
          <Container>
            <Title>已完成貼文</Title>
            <List>
              {dataList &&
                dataList.map((obj, i) => {
                  const {
                    exchangeId,
                    initiatorName,
                    receiverName,
                    tittle,
                    finishDate,
                  } = obj;
                  return (
                    <li key={i}>
                      <div>
                        <h3>
                          {tittle} |{" "}
                          {initiatorName === localStorage.getItem("name")
                            ? receiverName
                            : initiatorName}
                        </h3>
                        <p>{finishDate}</p>
                      </div>
                      <Btn
                        $style="outline"
                        onClick={() => {
                          dispatch(setLoading(true));
                          navigate(`/user/rating/${exchangeId}`);
                        }}
                      >
                        觀看內容及評價
                      </Btn>
                    </li>
                  );
                })}
            </List>
          </Container>
        </Wrapper>
      )}
      {dataList.length === 0 && <EmptyData />}
    </>
  );
}

export default CommentList;
