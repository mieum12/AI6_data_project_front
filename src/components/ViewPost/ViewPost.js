import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./ViewPost.style";
import { usePost } from "../../hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { UpdatePost } from "../updatepost";



export const ViewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNm, setUserNm] = useState("");
  const [password, setPassword] = useState("");

  const { post } = usePost();

  return (
    <S.Container>
      <h1>
        게시글 제목
        {post.title}
        <br />
      </h1>
      <S.FormContainer>
        <form >
          게시글 내용
          {post.content}
          
        </form>
          <Link to={ROUTE.UPDATEPOST_PAGE.link} className="modify">수정</Link>
          <button type="delete">삭제</button>
      </S.FormContainer>
    </S.Container>
  );
};
