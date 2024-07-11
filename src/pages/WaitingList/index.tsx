import { useState, useEffect } from "react";
import { Wrapper, Container, Title, SortWrapper, List, Item } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../redux";
import { setPages } from "../../../redux/pages/pagesSlice";
import { setPostId } from "../../../redux/postId/postIdSlice";
import axios from "axios";
import apiBase from "../../Api";
import PageBar from "../../components/PageBar";
import EmptyData from "../../components/EmptyData";
import { Btn } from "../../styles/Btn";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";

type WaitingListInterface = {
  ExchangesId: number;
  PostId: number;
  ExchangeStatus: boolean;
  PosterName: string;
  PosterAvatar: string;
  Title: string;
  AppliCreatedAt: string;
  PostExpirationDate: string;
};

type data = {
  Code: number;
  Status: string | boolean;
  data: WaitingListInterface[];
  message: string;
  page: number;
  total: number;
  totalPages: number;
};

function WaitingList() {
  const toastState = useSelector((state: RootStateType) => state.toast.toast);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("由新到舊");
  const [loading, setLoading] = useState(true);
  const handleChange = (sort: string) => {
    setSort(sort);
  };

  //* 儲存等待回覆列表
  const [list, setList] = useState<WaitingListInterface[]>([]);
  const [data, setData] = useState<data>({} as data);

  useEffect(() => {
    //* 接回等待回覆列表
    async function getWaitingList() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      setLoading(true);

      try {
        await axios({
          method: "GET",
          url: apiBase.GET_WAITING_FOR_APPROVAL_LIST,
          headers: headers,
        })
          .then((res) => {
            setData(res.data);
            Array.isArray(res.data.data) && setList(res.data.data);
            dispatch(setPages(res.data.totalPages));
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getWaitingList();
  }, []);

  const sortedList = [...list]?.sort(
    (a: WaitingListInterface, b: WaitingListInterface) => {
      if (sort === "由新到舊") {
        return (
          new Date(b.AppliCreatedAt).getTime() -
          new Date(a.AppliCreatedAt).getTime()
        );
      } else {
        return (
          new Date(a.AppliCreatedAt).getTime() -
          new Date(b.AppliCreatedAt).getTime()
        );
      }
    }
  );

  function handleShowDetails(
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setSlidingPostState());
    dispatch(setPostId(id));
  }

  return (
    <>
      {toastState && <Toast />}
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Container>
            <Title>等待回應貼文</Title>
            <SortWrapper>
              <p>時間排序</p>
              <select
                value={sort}
                onChange={(e) => handleChange(e.target.value)}
              >
                <option value="由新到舊">從新到舊</option>
                <option value="由舊到新">從舊到新</option>
              </select>
            </SortWrapper>
            <List>
              {sortedList.length !== 0 ? (
                sortedList?.map((item: WaitingListInterface, index: number) => {
                  return (
                    <li key={index}>
                      <Item>
                        <div>
                          <img src={item.PosterAvatar} alt="avatar" />
                        </div>
                        <div>
                          <h4>{item.Title}</h4>
                          <p>
                            申請日期: <span>{item.AppliCreatedAt}</span>
                          </p>
                          <p>
                            貼文有效期限: <span>{item.PostExpirationDate}</span>
                          </p>
                        </div>
                        <div>
                          <Btn $style="outline">取消申請</Btn>
                          <Btn
                            $style="outline"
                            onClick={(e) => {
                              handleShowDetails(e, item.PostId);
                            }}
                          >
                            詳細內容
                          </Btn>
                        </div>
                      </Item>
                    </li>
                  );
                })
              ) : (
                <EmptyData />
              )}
            </List>
            {data.Status === "ok" && <PageBar />}
          </Container>
        </Wrapper>
      )}
    </>
  );
}
export default WaitingList;
