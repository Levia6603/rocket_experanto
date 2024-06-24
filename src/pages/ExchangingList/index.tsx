import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../redux";
import axios from "axios";
import apiBase from "../../Api";
import { setPages } from "../../../redux/pages/pagesSlice";
import { Title, Cards, Card, Wrapper, Container } from "./style";
import { Btn } from "../../styles/Btn";
import PageBar from "../../components/PageBar";
import EmptyData from "../../components/EmptyData";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";

interface ApiData {
  duration: string;
  exchangeId: number;
  initiatorAvatar: string;
  initiatorId: number;
  initiatorName: string;
  receiverAvatar: string;
  receiverId: number;
  receiverName: string;
  tittle: string;
}

interface ExchangeData {
  name: string;
  avatar: string;
  title: string;
  duration: string;
  id: number;
}

function ExchangingList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toastState = useSelector((state: RootStateType) => state.toast.toast);

  const [exchangeList, setExchangeList] = useState<ExchangeData[]>([]);
  const [pageStatus, setPageStatus] = useState({
    status: "",
    totalPages: 0,
    currentPage: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExchangingList() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      try {
        setLoading(true);
        const data = await axios({
          method: "GET",
          url: apiBase.GET_EXCHANGING_LIST,
          headers: headers,
        })
          .then((res) => {
            return res.data;
          })
          .catch((err) => console.log(err));
        setPageStatus({
          status: data.Status,
          totalPages: data.totalPages,
          currentPage: data.page,
        });
        const dataList: ApiData[] = data.list;
        const list = dataList.map((obj) => {
          if (obj.initiatorName === localStorage.getItem("name")) {
            const {
              receiverName,
              receiverAvatar,
              tittle,
              exchangeId,
              duration,
            } = obj;
            return {
              id: exchangeId,
              title: tittle,
              avatar: receiverAvatar,
              name: receiverName,
              duration,
            };
          } else {
            const {
              initiatorAvatar,
              initiatorName,
              tittle,
              exchangeId,
              duration,
            } = obj;
            return {
              id: exchangeId,
              title: tittle,
              avatar: initiatorAvatar,
              name: initiatorName,
              duration,
            };
          }
        });
        setExchangeList(list);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return [];
      }
    }

    getExchangingList();
  }, []);

  useEffect(() => {
    dispatch(setPages(pageStatus.totalPages));
  }, [pageStatus]);

  return (
    <Wrapper>
      {toastState && <Toast />}
      <Container>
        <Title>{"交換列表"}</Title>
        <Cards>
          {loading ? (
            <Loading />
          ) : exchangeList && exchangeList.length > 0 ? (
            exchangeList.map((obj, i) => {
              const { avatar, name, duration, title, id } = obj;
              return (
                <Card key={i}>
                  <div>
                    <div>
                      <img src={avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4>{title}</h4>
                      <h4>
                        {"貼文者名稱: "}
                        <span>{name}</span>
                      </h4>
                    </div>
                    <div>
                      <p>
                        {"有效時間: "}
                        <span>{`${duration}`}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Btn
                      $style="outline"
                      onClick={() => navigate(`/user/exchanging/${id}`)}
                    >
                      詳細內容
                    </Btn>
                  </div>
                </Card>
              );
            })
          ) : (
            <EmptyData />
          )}
        </Cards>
        {pageStatus.status === "ok" && <PageBar />}
      </Container>
    </Wrapper>
  );
}

export default ExchangingList;
