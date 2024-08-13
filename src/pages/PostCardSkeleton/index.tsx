import { Wrapper, Header, Content, HashTagSection, HashTag } from "./styles";
import { Skeleton } from "@mui/material";
import liked from "/profile_box_icons/heart.svg";
import exchange from "/exchange_icon.svg";

function PostCardSkeleton() {
  return (
    <Wrapper>
      <div>
        <Header>
          <div>
            <div>
              <Skeleton
                animation="wave"
                variant="circular"
                sx={{ width: 60, height: 60 }}
              />
            </div>
            <h6>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "4rem" }}
              />
            </h6>
          </div>
          <div>
            <img src={liked} alt="liked" />
            <p>收藏</p>
          </div>
        </Header>

        <div>
          <p>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "1rem", width: "2rem" }}
            />
          </p>
          <img src={exchange} alt="" />
          <p>
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "1rem", width: "2rem" }}
            />
          </p>
        </div>

        <div>
          <Content>
            <h4>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem", width: "5rem" }}
              />
            </h4>

            <p>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem", width: "10rem" }}
              />
            </p>
          </Content>
          <HashTagSection>
            {Array.from({ length: 4 }).map((_, index) => (
              <HashTag key={index}>
                <p>
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "1rem", width: "4rem" }}
                  />
                </p>
              </HashTag>
            ))}
          </HashTagSection>
        </div>
      </div>
    </Wrapper>
  );
}
export default PostCardSkeleton;
