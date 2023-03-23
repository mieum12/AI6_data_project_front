import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/Route";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userNm, setUserNm] = useState("");
  const [password, setPassword] = useState("");
  const [createPost, setCreatePost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/post").then((response) => {
      setCreatePost(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/post", { title, content, userNm, password })
      .then(() => {
        setTitle("");
        setContent("");
        setUserNm("");
        setPassword("");
      })
      .catch(() => {
        console.log(title);
      });
  };

  return (
    <div>
      <h1>게시판 작성</h1>
      <form onSubmit={handleSubmit}>
        <label>제목:</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>내용:</label>
        <br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>사용자명:</label>
        <br />
        <input
          type="text"
          value={userNm}
          onChange={(e) => setUserNm(e.target.value)}
        />
        <br />
        <label>비밀번호:</label>
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">작성</button>
        <Link to={ROUTE.POSTLIST_PAGE.link}>
          <button>뒤로가기</button>
        </Link>
      </form>
    </div>
  );
}

export default CreatePostPage;
