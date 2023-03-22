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

import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

const PostList = (props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            {/* <th>내용</th> */}
            <th>작성시간</th>
            <th>수정시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>첫번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>6</td>
          </tr>
          <tr>
            <td>2</td>
            <td>두번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td>세번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>1</td>
          </tr>
          <tr>
            <td>4</td>
            <td>네번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>2</td>
          </tr>
          <tr>
            <td>5</td>
            <td>다섯번째 게시글입니다.</td>
            <td>2020-10-25</td>
            <td>4</td>
          </tr>
          <Link to={ROUTE.CREATEPOST_PAGE.link}>
            <button>글 작성하기</button>
          </Link>
        </tbody>
      </table>
    </>
  );
};

export default PostList;
