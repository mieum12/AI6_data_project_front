import { usePost } from "../../hooks";
import * as S from "./Post.style";
import { Link, useParams } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { useNavigate } from "react-router-dom";
import { PostModalButton } from "./PostModalButon";

export const Post = () => {
  const { postId } = useParams();
  const { post } = usePost(postId);
  console.log(post);

  const navigate = useNavigate();

  const moveToProductDetail = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <S.PostSection>
      <Link to={ROUTE.CREATEPOST_PAGE.link}>
        <button className="button">글 작성하기</button>
      </Link>
      <table>
        <thead className="table-head">
          <tr>
            <th>번호</th>
            <th className="postTitle">제목</th>
            <th>작성시간</th>
            <th>수정시간</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {post.map((post) => (
            <tr key={post.postId}>
              <td>{post.postId}</td>
              <td>
                <PostModalButton name={post} post={post.title} />
              </td>
              {/* TODO: 날짜 형식 바꿔서 출력 */}
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link to={ROUTE.CREATEPOST_PAGE.link}>
        <button>글 작성하기</button>
      </Link> */}
    </S.PostSection>
  );
};
