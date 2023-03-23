import { usePost } from "../../hooks";
import * as S from "./Post.style";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

export const Post = () => {
  const { post } = usePost();
  console.log(post);

  return (
    <S.PostSection>
      <Link to={ROUTE.CREATEPOST_PAGE.link}>
        <button>글 작성하기</button>
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
          {post &&
            post.map((post) => (
              <tr key={post.postId}>
                <td>{post.postId}</td>
                <td>
                  <Link to={ROUTE.UPDATEPOST_PAGE.link}>{post.title}</Link>
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
