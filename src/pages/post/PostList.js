// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// function PostList() {
//   const [postList, setPostList] = useState([]);

//   useEffect(() => {
//     axios.get("/api/post").then((response) => {
//       setPostList(response.data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>게시판</h1>
//       {postList.map((post) => (
//         <div key={post.id}>
//           <p>{post.userNm}</p>
//           <p>{post.password}</p>
//           <p>{post.title}</p>
//           <p>{post.content}</p>
//           <p>{post.createdAt}</p>
//           <p>{post.updatedAt}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostList;
import { Post } from "../../components";

const PostListPage = (props) => {
  return (
    <>
      <Post />
    </>
  );
};

export default PostListPage;
