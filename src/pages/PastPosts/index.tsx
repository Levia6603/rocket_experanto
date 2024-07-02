import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootStateType } from "../../../redux";
import { setLoading } from "../../../redux/loadingState/loadingState";
import axios from "axios";
import apiBase from "../../Api";
import PageBar from "../../components/PageBar";
import EmptyData from "../../components/EmptyData";
import { Wrapper, Container, Title, Cards, Card } from "./styles";
import { SortWrapper } from "../WaitingList/styles";
import Loading from "../../components/Loading";
import { Btn } from "../../styles/Btn";
import editPen from "/editPen.svg";

interface Post {
  Title: string;
  CreatedAt: string;
  Id: number;
}
interface data {
  Status: string | boolean;
  Code: number;
  message: string;
  UserName: string;
  UserAvatar: string;
  postsList: Post[];
  page: number;
  totalPages: number;
  total: number;
}

function PastPosts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({} as data);
  const [sort, setSort] = useState("由新到舊");
  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    dispatch(setLoading(true));
    async function getPosts() {
      try {
        const data: data = await axios({
          method: "GET",
          url: `${apiBase.GET_PAST_POSTS}`,
          headers: headers,
        })
          .then((res) => {
            res.data.Status === false && navigate("/login");
            return res.data;
          })
          .catch((err) => console.log(err));

        setData(data);
      } finally {
        dispatch(setLoading(false));
      }
    }

    getPosts();
  }, []);

  const sortedList =
    data.postsList &&
    [...data.postsList]?.sort((a: Post, b: Post) => {
      if (sort === "由新到舊") {
        return (
          new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
        );
      } else {
        return (
          new Date(a.CreatedAt).getTime() - new Date(b.CreatedAt).getTime()
        );
      }
    });

  const handleChange = (sort: string) => {
    setSort(sort);
  };

  return (
    <>
      {loadingState && <Loading />}
      {!loadingState && data ? (
        <Wrapper>
          <Container>
            <Title>已發表貼文</Title>
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
            <Cards>
              {sortedList &&
                sortedList?.map((post: Post) => (
                  <Card key={post.Id}>
                    <div>
                      <div>
                        <img src={data.UserAvatar} alt="大頭貼" />
                      </div>
                    </div>
                    <div>
                      <h4>{post.Title}</h4>
                      <p>
                        發表日期:
                        <span>{post.CreatedAt}</span>
                      </p>
                    </div>
                    <div>
                      <Btn
                        $style={"outline"}
                        onClick={() => {
                          navigate(`/home/post/${post.Id}`);
                        }}
                      >
                        詳細內容
                      </Btn>
                      <div>
                        <img src={editPen} alt="edit" />
                      </div>
                    </div>
                  </Card>
                ))}
            </Cards>
          </Container>
          <PageBar />
        </Wrapper>
      ) : (
        <EmptyData />
      )}
    </>
  );
}

export default PastPosts;
