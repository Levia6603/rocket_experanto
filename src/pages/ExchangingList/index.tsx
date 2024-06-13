import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import apiBase from "../../Api";
import { setPages } from "../../../redux/pages/pagesSlice";
import { Title, Cards, Card, Wrapper, Container } from "./style";
import { Btn } from "../../styles/Btn";
import PageBar from "../../components/PageBar";

type ExchangingObject = {
  code: number;
  message: string;
  status: string;
  page: number;
  totalPages: number;
  total: number;
  list: ExchangingList[];
};
type ExchangingList = {
  duration: string;
  exchangeId: number;
  initiatorAvatar: string;
  initiatorName: string;
  intiatorId: number;
  receiverAvatar: string;
  receiverName: string;
  receiverId: number;
  title: string;
};

function ExchangingList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [exchangingList, setExchangingList] = useState<ExchangingObject>(
    {} as ExchangingObject
  );
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
        const exchangingList = await axios({
          method: "GET",
          url: apiBase.GET_EXCHANGING_LIST,
          headers: headers,
        })
          .then((res) => {
            return res.data;
          })
          .catch((err) => console.log(err));
        dispatch(setPages(exchangingList.totalPages));
        setExchangingList(exchangingList);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        return [];
      }
    }

    getExchangingList();
  }, [dispatch]);

  useEffect(() => {
    console.log(exchangingList);
  }),
    [exchangingList];
  return (
    <Wrapper>
      <Container>
        <Title>{"交換列表"}</Title>
        <Cards>
          {loading ? (
            <div style={{ textAlign: "center" }}>{"載入中"}</div>
          ) : exchangingList?.list ? (
            exchangingList?.list?.map((item: ExchangingList, index: number) => {
              return (
                <Card key={index}>
                  <div>
                    <div>
                      <img src={item.receiverAvatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4>{"貼文標題"}</h4>
                      <h4>
                        {"貼文者名稱: "}
                        <span>{item.initiatorName}</span>
                      </h4>
                    </div>
                    <div>
                      <p>
                        {"有效時間: "}
                        <span>{`${item.duration}`}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Btn
                      $style="outline"
                      onClick={() =>
                        navigate(`/user/exchanging/${item.exchangeId}`)
                      }
                    >
                      詳細內容
                    </Btn>
                  </div>
                </Card>
              );
            })
          ) : (
            <div style={{ textAlign: "center" }}>{"沒有資料"}</div>
          )}
        </Cards>
        <PageBar />
      </Container>
    </Wrapper>
  );
}

export default ExchangingList;
