import { usePost } from "../../hooks";

export const Post = () => {
  const { post } = usePost();
  console.log(post);

  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성시간</th>
          <th>수정시간</th>
        </tr>
      </thead>
      <tbody>
        {post.map((post) => (
          <tr key={post.postId}>
            <td>{post.postId}</td>
            <td>{post.title}</td>
            <td>{post.createdAt}</td>
            <td>{post.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
