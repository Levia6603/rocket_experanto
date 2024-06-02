import { useDispatch } from "react-redux";
import { setSlidingPostState } from "../../../redux/slidingState/slidingSlice";
import { setPostId } from "../../../redux/postId/postIdSlice";
import { Wrapper, Header, Content, HashTagSection, HashTag } from "./styles";
import liked from "/profile_box_icons/heart.svg";

export interface SimplifiedPostInterface {
  Learn?: string;
  PostId: number;
  content?: string;
  isFavorite?: boolean;
  skill?: string;
  tags?: string[];
  title?: string;
  userAvatar?: string;
  userName?: string;
}

function PostCard({ ...props }: SimplifiedPostInterface) {
  //* 設定dispatch
  const dispatch = useDispatch();

  //* 點擊卡片的一系列動作
  const handleClick = (el: React.MouseEvent<HTMLDivElement>) => {
    //* 找到包含 data-postid 属性的元素
    let targetElement = el.target as HTMLElement;
    while (targetElement && !targetElement.dataset.postid) {
      targetElement = targetElement.parentElement as HTMLElement;
    }
    //* 如果找到了 PostId 執行以下動作
    if (targetElement) {
      const postId = targetElement.dataset.postid;
      dispatch(setSlidingPostState());
      dispatch(setPostId(postId));
    }
  };
  return (
    <Wrapper data-postid={props?.PostId || ""} onClickCapture={handleClick}>
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
            <h6>文章標題</h6>
          </div>
          <p>{props.title}</p>
        </div>
        <div>
          <div>
            <h6>擅長語言</h6>
          </div>
          <p>{props.skill}</p>
        </div>
        <div>
          <div>
            <h6>我想學</h6>
          </div>
          <p>{props.Learn}</p>
        </div>
        <div>
          <div>
            <h6>我的目標</h6>
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
