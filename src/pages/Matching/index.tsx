import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPages } from "../../../redux/pages/pagesSlice";
import { setPostId } from "../../../redux/postId/postIdSlice";
// import { RootStateType } from "../../../redux";
import axios from "axios";
import { setSlidingMatchingState } from "../../../redux/slidingState/slidingSlice";
import apiBase from "../../Api";
import {
  Wrapper,
  Container,
  Title,
  Cards,
  CardWrapper,
  Card,
  ShowDetailsButton,
  Candidates,
  Candidate,
} from "./styles";
import { SortWrapper } from "../WaitingList/styles";
import PageBar from "../../components/PageBar";
import person from "../../../public/profile_box_icons/person.svg";
import dropdownIcon from "/chevron-down-white.svg";
import exchange from "/exchange_icon.svg";

type MatchingData = {
  Code: number;
  Status: string;
  list: {
    PostId: number;
    PostTitle: string;
    LanguageToLearn: string;
    LatestApplicationDate: string;
    ApplicationsCount: number;
    Applications: {
      ReceiverUserName: string;
      ReceiverUserId: number;
      ReceiverUserAvatar: string;
      ExchangeId: number;
      ApplyCreatedAt: string;
      ApplyContent: string;
      LanguageToLearn: string;
      LanguageToTeach: string;
    }[];
  }[];
  message: string;
  page: number;
  total: number;
  totalPages: number;
};

function Matching() {
  //* 導入 Redux 的 dispatch 用來記錄 offCanvas的狀態
  const dispatch = useDispatch();
  //* 從 redux state 取得總頁數
  // const page = useSelector((state: RootStateType) => state.pages.page);

  //* 設定排序狀態
  const [sort, setSort] = useState("由新到舊");
  const handleChange = (sort: string) => {
    setSort(sort);
  };

  //* 手風琴開關，初始化是一個記錄 boolean 的陣列，透過callback function 傳入一個陣列，用來記錄每個手風琴是否開啟
  const [openStates, setOpenStates] = useState<boolean[]>([]);
  const handleShowDetails = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  //* 設定讀取狀態
  const [loading, setLoading] = useState(true);

  //* 取得 Matching List 資料
  const [data, setData] = useState<MatchingData>({} as MatchingData);
  useEffect(() => {
    async function getMatchingList() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      try {
        await axios({
          method: "GET",
          url: apiBase.GET_MATCHING_LIST,
          headers: headers,
        })
          .then((res) => {
            setData(res.data);
            setOpenStates(new Array(res.data.list.length).fill(true)); //* 初始化手風琴陣列的狀態
            dispatch(setPages(res.data.totalPages)); //* 設定總頁數
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getMatchingList();
  }, [dispatch]);

  //* 排序用的變數，排序依據是最新申請時間，下方render的 list 就會使用這組新的陣列
  const sortedList = data.list?.sort(
    (a: MatchingData["list"][number], b: MatchingData["list"][number]) => {
      if (sort === "由新到舊") {
        return (
          new Date(b.LatestApplicationDate).getTime() -
          new Date(a.LatestApplicationDate).getTime()
        );
      } else {
        return (
          new Date(a.LatestApplicationDate).getTime() -
          new Date(b.LatestApplicationDate).getTime()
        );
      }
    }
  );

  //* 點擊卡片後叫出offCanvas，做一系列動作
  const handleClick = (el: React.MouseEvent<HTMLDivElement>) => {
    //* 找到包含 data-postid 属性的元素
    let targetElement = el.target as HTMLElement;
    while (targetElement && !targetElement.dataset.exchangeid) {
      targetElement = targetElement.parentElement as HTMLElement;
    }
    //* 如果找到了 exchangeid 執行以下動作
    if (targetElement) {
      const exchangeid = targetElement.dataset.exchangeid;
      dispatch(setSlidingMatchingState());
      dispatch(setPostId(exchangeid));
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title>{"申請與配對"}</Title>
          <SortWrapper>
            <p>時間排序</p>
            <select value={sort} onChange={(e) => handleChange(e.target.value)}>
              <option value="由新到舊">由新到舊</option>
              <option value="由舊到新">由舊到新</option>
            </select>
          </SortWrapper>
          <Cards>
            {loading ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ textAlign: "center", fontWeight: "900" }}>
                  讀取中...
                </h2>
              </div>
            ) : sortedList ? (
              sortedList?.map((item, index) => {
                const isOpen = openStates[index];
                return (
                  <CardWrapper $isOpen={isOpen} key={index}>
                    <Card $isOpen={isOpen}>
                      <div>
                        <div>
                          <h5>{item.PostTitle}</h5>
                        </div>
                        <div>
                          <div>
                            <div>
                              <img src={person} alt="" />
                            </div>
                            <p>
                              <span>{item.ApplicationsCount}</span>人
                            </p>
                          </div>
                          <div>
                            <p>
                              最新申請日期：
                              <span>{item.LatestApplicationDate}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ShowDetailsButton
                          $isOpen={isOpen}
                          onClick={() => handleShowDetails(index)}
                        >
                          {isOpen ? "詳細內容" : "收合"}
                          <img src={dropdownIcon} alt="" />
                        </ShowDetailsButton>
                      </div>
                    </Card>
                    <Candidates $isOpen={!isOpen}>
                      {data?.list[index]?.Applications?.map(
                        (item, index: number) => {
                          return (
                            <Candidate
                              key={index}
                              onClickCapture={handleClick}
                              data-exchangeid={item.ExchangeId}
                            >
                              <div>
                                <div>
                                  <img src={item.ReceiverUserAvatar} alt="" />
                                </div>
                                <h5>{item.ReceiverUserName}</h5>
                                <p>
                                  提出申請時間<span>{item.ApplyCreatedAt}</span>
                                </p>
                              </div>
                              <div>
                                <div>
                                  <p>{item.LanguageToLearn}</p>
                                  <img src={exchange} alt="" />
                                  <p>{item.LanguageToTeach}</p>
                                </div>
                                <div>
                                  <p> {item.ApplyContent} </p>
                                </div>
                              </div>
                            </Candidate>
                          );
                        }
                      )}
                    </Candidates>
                  </CardWrapper>
                );
              })
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ textAlign: "center", fontWeight: "900" }}>
                  目前沒有資料
                </h2>
              </div>
            )}
          </Cards>
          {sortedList && <PageBar />}
        </Container>
      </Wrapper>
    </>
  );
}

export default Matching;
