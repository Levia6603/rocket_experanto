import { Card, Container, Rate, Stars, Title } from "./style";
import star from "/profile_box_icons/star-yellow.svg";
import starOutline from "/profile_box_icons/star.svg";

function Rating() {
  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");

  return (
    <Container>
      <h2>評價內容</h2>
      <Title>
        <h3>Title</h3>
        <p>123</p>
      </Title>
      <Card>
        <div>
          <img src={avatar || ""} alt="" />
          <p>{name}</p>
        </div>
        <ul>
          <li>教學計劃:</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </Card>
      <h3>評價</h3>
      <Rate>
        <div>
          <img src={avatar || ""} alt="" />
          <h4>{name}</h4>
        </div>
        <ul>
          <li>
            <h5>1. 對於對方的教學規劃，對你的幫助如何?</h5>
            <Stars>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Stars>
          </li>
          <li>
            <h5>2. 對方的教學方式，你喜歡的程度?</h5>
            <Stars>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Stars>
          </li>
          <li>
            <h5>3. 針對這次交換的整體感受如何?</h5>
            <Stars>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Stars>
          </li>
          <li>
            <h5>4. 評價內容: </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae dicta praesentium accusamus velit non laudantium atque
              minus, ut quos debitis, unde repellat fuga nostrum a dignissimos
              dolores itaque consectetur culpa?
            </p>
          </li>
        </ul>
      </Rate>
      <Rate>
        <div>
          <img src={avatar || ""} alt="" />
          <h4>{name}</h4>
        </div>
        <ul>
          <li>
            <h5>1. 對於對方的教學規劃，對你的幫助如何?</h5>
            <Stars>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Stars>
          </li>
          <li>
            <h5>2. 對方的教學方式，你喜歡的程度?</h5>
            <Stars>
              <img src={starOutline} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Stars>
          </li>
          <li>
            <h5>3. 針對這次交換的整體感受如何?</h5>
            <Stars>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </Stars>
          </li>
          <li>
            <h5>4. 評價內容: </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae dicta praesentium accusamus velit non laudantium atque
              minus, ut quos debitis, unde repellat fuga nostrum a dignissimos
              dolores itaque consectetur culpa?
            </p>
          </li>
        </ul>
      </Rate>
    </Container>
  );
}

export default Rating;
