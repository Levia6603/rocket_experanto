import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/loadingState/loadingState";
import { Card, Container, Rate, Stars, Title } from "./style";
import { RootStateType } from "../../../redux";
import axios from "axios";
import apiBase, { headers } from "../../Api";
import star from "/profile_box_icons/star-yellow.svg";
import starOutline from "/profile_box_icons/star.svg";
import Loading from "../../components/Loading";

interface ExchangeData {
  title: string;
  finishDate: string;
  name: string;
  avatar: string;
  plan: string[];
}
interface Review {
  Avatar: string;
  Comment: string;
  Name: string;
  OverallScore: number;
  PlanningScore: number;
  TeachingScore: number;
  UserId: number;
}

function Rating() {
  const { id } = useParams();
  const loadingState = useSelector(
    (state: RootStateType) => state.loading.loading
  );
  const [exchangeData, setExchangeData] = useState<ExchangeData>();
  const [reviews, setReviews] = useState<Review[]>([]);

  const dispatch = useDispatch();

  async function getData() {
    const data = await axios(`${apiBase.GET_RATING_DATA}/${id}`, {
      headers,
    }).then((res) => res.data);

    const list = data.list[0];
    const review: Review[] = data.Reviews;

    if (list.initiatorName) {
      const exData: ExchangeData = {
        title: list.tittle,
        finishDate: list.finishDate,
        name: list.initiatorName,
        avatar: list.initiatorAvatar,
        plan: list.initiatorPlan[0].plan,
      };
      setExchangeData(exData);
    } else {
      const exData: ExchangeData = {
        title: list.tittle,
        finishDate: list.finishDate,
        name: list.receiverName,
        avatar: list.receiverAvatar,
        plan: list.receiverPlan[0].plan,
      };
      setExchangeData(exData);
    }
    setReviews(review);
    dispatch(setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loadingState && <Loading />}
      {exchangeData && (
        <Container>
          <h2>評價內容</h2>
          <Title>
            <h3>{exchangeData.title}</h3>
            <p>完成時間：{exchangeData.finishDate}</p>
          </Title>
          <Card>
            <div>
              <img src={exchangeData.avatar} alt="" />
              <p>{exchangeData.name}</p>
            </div>
            <ul>
              <li>教學計劃:</li>
              {exchangeData.plan.map((el, i) => (
                <li key={i}>
                  {i + 1}. {el}
                </li>
              ))}
            </ul>
          </Card>
          <h3>評價</h3>
          {reviews &&
            reviews.map((obj, i) => {
              const {
                Avatar,
                Name,
                Comment,
                TeachingScore,
                PlanningScore,
                OverallScore,
              } = obj;
              return (
                <Rate key={i}>
                  <div>
                    <img src={Avatar || ""} alt="" />
                    <h4>{Name}</h4>
                  </div>
                  <ul>
                    <li>
                      <h5>1. 對於對方的教學規劃，對你的幫助如何?</h5>
                      <Stars>
                        <img
                          src={PlanningScore > 0 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={PlanningScore > 1 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={PlanningScore > 2 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={PlanningScore > 3 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={PlanningScore > 4 ? star : starOutline}
                          alt="star"
                        />
                      </Stars>
                    </li>
                    <li>
                      <h5>2. 對方的教學方式，你喜歡的程度?</h5>
                      <Stars>
                        <img
                          src={TeachingScore > 0 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={TeachingScore > 1 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={TeachingScore > 2 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={TeachingScore > 3 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={TeachingScore > 4 ? star : starOutline}
                          alt="star"
                        />
                      </Stars>
                    </li>
                    <li>
                      <h5>3. 針對這次交換的整體感受如何?</h5>
                      <Stars>
                        <img
                          src={OverallScore > 0 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={OverallScore > 1 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={OverallScore > 2 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={OverallScore > 3 ? star : starOutline}
                          alt="star"
                        />
                        <img
                          src={OverallScore > 4 ? star : starOutline}
                          alt="star"
                        />
                      </Stars>
                    </li>
                    <li>
                      <h5>4. 評價內容: </h5>
                      <p>{Comment}</p>
                    </li>
                  </ul>
                </Rate>
              );
            })}
        </Container>
      )}
    </>
  );
}

export default Rating;
