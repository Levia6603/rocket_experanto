import {
  Wrapper,
  Container,
  Title,
  Header,
  Course,
  Review,
  ReviewItem,
  TextAreaWrapper,
  SubmitButton,
} from "./styles";
import star from "../../../public/profile_box_icons/star-yellow.svg";

function Commenting() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>填寫評價</Title>
          <div>
            <Header>
              <h5>我真的好想學好英文啊</h5>{" "}
              <p>
                完成日期: <span>{"2022/01/01 19:00"}</span>
              </p>
            </Header>
            <Course>
              <div>
                <div>
                  <img src="/avatar-80.svg" alt="" />
                </div>
              </div>
              <div>
                <h6>教學計劃</h6>
                <div>
                  <p>
                    <span>1. </span>
                    奠定基礎：學生將學習基本的英語文法、詞彙和常見句子結構。
                  </p>
                  <p>
                    <span>2.</span>
                    提升聽力技能：透過聽力練習，學生將加深對英語聽力的理解並提高他們的反應速度。
                  </p>
                  <p>
                    <span>3.</span>
                    增強口語表達：透過角色扮演、小組討論和其他活動，學生將獲得用英語進行口語交流的信心。
                  </p>
                  <p>
                    <span>4.</span>
                    書面表達技巧：學生將學習基本的寫作技巧，包括句子結構、段落組織和常用表達。
                  </p>
                </div>
              </div>
            </Course>
          </div>
          <div>
            <Review>
              <h6>評價內容</h6>
              <ReviewItem>
                <p>
                  <span>1. </span> 您認為對方的教學規劃對您的幫助如何：
                </p>
                <ul>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                </ul>
              </ReviewItem>
              <ReviewItem>
                <p>
                  <span>2. </span> 您認為對方的教學方式對您的幫助如何：
                </p>
                <ul>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                </ul>
              </ReviewItem>
              <ReviewItem>
                <p>
                  <span>3. </span> 您認為這次的交換整體感受如何：
                </p>
                <ul>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                  <li>
                    <img src={star} alt="star" />
                  </li>
                </ul>
              </ReviewItem>
              <TextAreaWrapper>
                <p>留下您的評論</p>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="請留下您的評論⋯⋯"
                ></textarea>
              </TextAreaWrapper>
              <div>
                <SubmitButton>送出評價</SubmitButton>
              </div>
            </Review>
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

export default Commenting;
