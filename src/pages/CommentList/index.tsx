import { useEffect, useState } from "react";
import { Container, List, Title, Wrapper } from "./styles";
import axios from "axios";
import apiBase from "../../Api";
import { Btn } from "../../styles/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/loadingState/loadingState";

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

  async function getList() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const data: ExchangeData[] = await axios
        .get(apiBase.GET_RATING_LIST, { headers })
        .then((res) => {
          console.log(res.data);

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
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return (
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
  );
}

export default CommentList;
