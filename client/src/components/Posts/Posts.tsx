import { useState } from "react";
import { styled } from "@linaria/react";

import black from "../../assets/black.png";
import bookmark from "../../assets/bookmark.png";
import bookmarkWhite from "../../assets/bookmarkwhite.png";
import comment from "../../assets/comment.png";
import favorite from "../../assets/favorite.png";
import favoriteWhite from "../../assets/favoritewhite.png";
import retwitch from "../../assets/retwitch.png";

type Actions = {
  liked: boolean;
  bookmarked: boolean;
};

type Props = {
  borderTopVisible?: boolean;
};

export default function Posts(props: Props): JSX.Element {
  const [actions, setActions] = useState<Actions>({ liked: false, bookmarked: false });

  function handleClick(action: string) {
    if (action === "like") {
      setActions({ ...actions, liked: !actions.liked });
    } else {
      setActions({ ...actions, bookmarked: !actions.bookmarked });
    }
  }

  return (
    <StyledPosts borderTopVisible={props.borderTopVisible}>
      <div>
        <img src={black} alt="user pic" height={50} width={50} />
      </div>
      <div>
        <h6>
          Manasseh <span>@believemanasseh</span> <span>&#x2022; 11h</span>
        </h6>
        <p>
          I kinda need help deciding what drawing I wanssssssssssssssssssna mint. Or if I
          should just wait
        </p>
        <span className="actions">
          <img src={comment} alt="comment on post" height={20} width={20} />
          <img src={retwitch} alt="retwitch post" height={20} width={20} />
          {actions.liked ? (
            <img
              src={favorite}
              alt="like post"
              height={20}
              width={20}
              onClick={() => handleClick("like")}
            />
          ) : (
            <img
              src={favoriteWhite}
              alt="like post white"
              height={20}
              width={20}
              onClick={() => handleClick("like")}
            />
          )}
          {actions.bookmarked ? (
            <img
              src={bookmark}
              alt="bookmark post"
              height={20}
              width={20}
              onClick={() => handleClick("bookmark")}
            />
          ) : (
            <img
              src={bookmarkWhite}
              alt="bookmark post white"
              height={20}
              width={20}
              onClick={() => handleClick("bookmark")}
            />
          )}
        </span>
      </div>
    </StyledPosts>
  );
}

const StyledPosts = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 10px;
  border-bottom: 1px solid var(--border-color);
  border-top: ${(props) =>
    props.borderTopVisible ? `1px solid var(--border-color)` : `none`};

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }

  > div:nth-last-child(1) {
    margin-left: 15px;
  }

  > div h6 {
    text-align: left;
    font-size: 14px;
  }

  > div h6 span {
    font-size: 12px;
    font-weight: 100;
    color: #6b6a6a;
  }

  > div p {
    margin-top: 5px;
    text-align: left;
    /* width: 100%; */
  }

  > div:nth-child(1) img {
    border-radius: var(--border-radius);
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 80%;
  }

  .actions img {
    cursor: pointer;
  }
`;
