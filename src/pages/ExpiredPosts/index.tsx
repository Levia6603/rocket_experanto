import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiBase from "../../Api";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../redux";
import { setPages } from "../../../redux/pages/pagesSlice";
import { setLoading } from "../../../redux/loadingState/loadingState";
import EmptyData from "../../components/EmptyData";
import Loading from "../../components/Loading";
import PageBar from "../../components/PageBar";
import { Wrapper, Container, Title, Cards, Card } from "./styles";

interface Post {
  Title: string;
  CreateDate: string;
  ExpirationDate: string;
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

function ExpiredPosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );

  const [data, setData] = useState<data>({} as data);

  useEffect(() => {
    async function getExpiredPosts() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      dispatch(setLoading(true));

      try {
        const data = await axios({
          method: "GET",
          url: `${apiBase.GET_EXPIRED_POSTS}`,
          headers: headers,
        })
          .then((res) => {
            res.data.Status === false && navigate("/login");
            return res.data;
          })
          .catch((err) => console.log(err));
        setData(data);
        dispatch(setPages(data.totalPages));
      } finally {
        dispatch(setLoading(false));
      }
    }

    getExpiredPosts();
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>過期貼文</Title>
          <Cards>
            {loadingState && <Loading />}
            {data && data.Status === "ok" && !loadingState ? (
              data.postsList.map((post: Post, index) => (
                <Card key={index}>
                  <h4>{post.Title}</h4>
                  <p>{`貼文有效期間: ${post.CreateDate} 至 ${post.ExpirationDate}`}</p>
                </Card>
              ))
            ) : (
              <EmptyData />
            )}
          </Cards>
        </Container>
        {data && data?.Status === "ok" && <PageBar />}
      </Wrapper>
    </>
  );
}

export default ExpiredPosts;
