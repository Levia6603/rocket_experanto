import { Container, Photo, Menu, Item } from "./styles";
import { Skeleton } from "@mui/material";
import star from "/profile_box_icons/star-yellow.svg";

function ProfileBoxSkeleton() {
  return (
    <>
      <Container>
        <Photo>
          <div>
            <Skeleton variant="circular" sx={{ width: 80, height: 80 }} />
          </div>
          <h5>
            <Skeleton
              variant="text"
              sx={{ fontSize: "2rem", width: "10rem" }}
            />
          </h5>
          <div>
            <div>
              <p>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "4rem" }}
                />
              </p>
              <p>縣市區域</p>
            </div>
            <div>
              <div>
                <img src={star} alt="" />
                <p>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "3rem" }}
                  />
                </p>
              </div>
              <p>評價</p>
            </div>
          </div>
        </Photo>
        <Menu>
          <ul>
            {Array.from({ length: 4 }).map((_, i) => (
              <Item key={i}>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "6rem" }}
                />
              </Item>
            ))}
          </ul>
        </Menu>
      </Container>
    </>
  );
}

export default ProfileBoxSkeleton;
