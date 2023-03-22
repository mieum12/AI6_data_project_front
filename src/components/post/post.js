import { usePost } from "../../hooks";
import * as S from "./Post.style";

export const Post = () => {
  const { post } = usePost();
  console.log(post);

  return (
    <S.PostSection>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th className="postTitle">제목</th>
            <th>작성시간</th>
            <th>수정시간</th>
          </tr>
        </thead>
        <tbody>
          {post.map((post) => (
            <tr key={post.postId}>
              <td>{post.postId}</td>
              <td>{post.title}</td>
              {/* TODO: 날짜 형식 바꿔서 출력 */}
              <td>{post.createdAt}</td>
              <td>{post.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.PostSection>
  );
};
