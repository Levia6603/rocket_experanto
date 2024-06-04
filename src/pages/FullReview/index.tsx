import {
  Wrapper,
  Container,
  Title,
  Subject,
  Reviews,
  Review,
  ReviewItem,
} from "./styles";
import star from "/profile_box_icons/star-yellow.svg";
function FullReview() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>雙方評價</Title>
          <Subject>
            <div>
              <h4>
                主旨：
                <span>{"我真的好想學會英文啊"}</span>
              </h4>
              <p>
                完成日期：<span>2024/06/26 18:00</span>
              </p>
            </div>
            <div>
              <div>
                <div>
                  <img src="/avatar-80.svg" alt="" />
                </div>
                <p>Ella Dowson</p>
              </div>
              <div>
                <p>教學計劃</p>
                <ul>
                  <li>
                    <p>
                      <span>{"1. "}</span>
                      {
                        "奠定基礎：學生將學習基本的英語文法、詞彙和常見句子結構。"
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>{"2. "}</span>
                      {
                        "提升聽力技能：透過聽力練習，學生將加深對英語聽力的理解並提高他們的反應速度。"
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>{"3. "}</span>
                      {
                        "增強口語表達：透過角色扮演、小組討論和其他活動，學生將獲得用英語進行口語交流的信心。"
                      }
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>{"4. "}</span>
                      {
                        "書面表達技巧：學生將學習基本的寫作技巧，包括句子結構、段落組織和常用表達。"
                      }
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Subject>
          <Reviews>
            <h2>評價</h2>
            <Review>
              <div>
                <div>
                  <img src="/nav-profile.png" alt="" />
                </div>
                <p>Ella Dowson</p>
              </div>
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
              <div>
                <p>4. 評價內容：</p>
                <p>
                  {
                    "這次的教學讓我受益良多，期待下次的交換!!! 這次的教學讓我受益良多，期待下次的交換!!!這次的教學讓我受益良多，期待下次的交換!!!這次的教學讓我受益良多，期待下次的交換!!!"
                  }
                </p>
              </div>
            </Review>
            <Review>
              <div>
                <div>
                  <img src="/nav-profile.png" alt="" />
                </div>
                <p>Ella Dowson</p>
              </div>
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
              <div>
                <p>4. 評價內容：</p>
                <p>
                  {
                    "這次的教學讓我受益良多，期待下次的交換!!! 這次的教學讓我受益良多，期待下次的交換!!!這次的教學讓我受益良多，期待下次的交換!!!這次的教學讓我受益良多，期待下次的交換!!!"
                  }
                </p>
              </div>
            </Review>
          </Reviews>
        </Container>
      </Wrapper>
    </>
  );
}

export default FullReview;
