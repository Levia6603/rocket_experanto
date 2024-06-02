import { useDispatch } from "react-redux";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import { Wrapper, Header, Content, HashTagSection, HashTag } from "./styles";
import liked from "/profile_box_icons/heart.svg";

export interface SimplifiedPostInterface {
  Learn?: string;
  PostId?: number;
  content?: string;
  isFavorite?: boolean;
  skill?: string;
  tags?: string[];
  title?: string;
  userAvatar?: string;
  userName?: string;
}

function PostCard({ ...props }: SimplifiedPostInterface) {
  const dispatch = useDispatch();
  return (
    <Wrapper
      onClick={() => {
        dispatch(setSlidingPostState());
      }}
    >
      <Header>
        <div>
          <div>
            <img src={props.userAvatar} alt="avatar" />
          </div>
          <h6>{props.userName}</h6>
        </div>
        <div>
          {props.isFavorite ? (
            <img src={liked} alt="isLiked" />
          ) : (
            <img src={liked} alt="liked" />
          )}
        </div>
      </Header>
      <Content>
        <div>
          <div>
            <h6>Title</h6>
          </div>
          <p>{props.title}</p>
        </div>
        <div>
          <div>
            <h6>Fluent</h6>
          </div>
          <p>English</p>
        </div>
        <div>
          <div>
            <h6>Looking for</h6>
          </div>
          <p>Mandarin</p>
        </div>
        <div>
          <div>
            <h6>Goals</h6>
          </div>
          <p>{props.content}</p>
        </div>
      </Content>
      <HashTagSection>
        {props.tags?.map((el, index) => (
          <HashTag key={index}>
            <p>{el}</p>
          </HashTag>
        ))}
      </HashTagSection>
    </Wrapper>
  );
}
export default PostCard;
