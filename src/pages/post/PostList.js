import { Post } from "../../components";

const PostListPage = (props) => {
  return (
    <>
      <Post />
    </>
  );
};

export default PostListPage;

// import React, { useState } from 'react';
// import styled from "styled-components";
// import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";



// function Article(props) {
//   return (
//     <ArticlePart>
//       <article >
//         <h2 className='title'>{props.title}</h2>
//         <div className='body'>{props.body}</div>
//       </article>
//     </ArticlePart>
//   );
// }

// const ArticlePart = styled.div`
// background-color: ${COLOR_WHITE};
// color: ${PRIMARY_COLOR};
// .title{
//   display:flex;
//     justify-content:center;
// }
// .body {
//   display:flex;
//     justify-content:center;
//     height: 350px;
// }
// `

// function Header(props) {
//   return (
//     <HeaderPart>
//       <header>
//         <h1>
//           <a
//           className='title'
//             href="/"
//             onClick={(event) => {
//               event.preventDefault();
//               props.onChangeMode();
//             }}
//           >
//             {props.title}
//           </a>
//         </h1>
//       </header>
//     </HeaderPart>
//   );
// }

// const HeaderPart = styled.div`
// .title {
//   text-decoration: none;
//   color: ${PRIMARY_COLOR}
// }
// `

// function Nav(props) {
//   const lis = [];
//   for (let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push(
//       <li key={t.id}>
//         <a
//           className='lists'
//           id={t.id}
//           href={'/read/' + t.id}
//           onClick={(event) => {
//             event.preventDefault();
//             props.onChangeMode(Number(event.target.id));
//           }}
//         >
//           {t.title}
//         </a>
//       </li>
//     );
//   }
//   return (
//     <List>
//       <nav>
//         <ol >{lis}</ol>
//       </nav>
//     </List>
//   );
// }

// const List = styled.div`
// height: 370px;
// .lists {
//   text-decoration: none;
//   color: ${PRIMARY_COLOR}

// }
// `
// function Create(props) {
//   return (
//     <CreatePage>
//       <article>
//         <h2>새 글 작성 페이지 입니다.</h2>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             const title = event.target.title.value;
//             const body = event.target.body.value;
//             props.onCreate(title, body);
//           }}
//         >
//           <p>
//             <input type="text" name="title" placeholder="제목을 입력하세요" />
//           </p>
//           <p>
//             <textarea name="body" placeholder="내용을 입력하세요"></textarea>
//           </p>
//           <p>
//             <input type="submit" value="저장하기"></input>
//           </p>
//         </form>
//       </article>
//     </CreatePage>
//   );
// }

// const CreatePage = styled.div`
// margin-left: 20px;
// `

// function Update(props) {
//   const [title, setTitle] = useState(props.title);
//   const [body, setBody] = useState(props.body);
//   return (
//     <Updateing>
//       <article>
//         <h2>지금 수정 중 입니다!</h2>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             const title = event.target.title.value;
//             const body = event.target.body.value;
//             props.onUpdate(title, body);
//           }}
//         >
//           <p>
//             <input
//               className='title'
//               type="text"
//               name="title"
//               placeholder="title"
//               value={title}
//               onChange={(event) => {
//                 setTitle(event.target.value);
//               }}
//             />
//           </p>
//           <p>
//             <textarea
//             className='body'
//               name="body"
//               placeholder="body"
//               value={body}
//               onChange={(event) => {
//                 setBody(event.target.value);
//               }}
//             ></textarea>
//           </p>
//           <p>
//             <input type="submit" value="수정 완료"></input>
//           </p>
//         </form>
//       </article>
//     </Updateing>
//   );
// }

// const Updateing = styled.div `
// // display:flex;
// padding-left: 30px;

// .title {
//   // display:flex;
//   // justify-content:center;
// }

// `


// function App() {
//   const [mode, setMode] = useState('WELCOME');
//   const [id, setId] = useState(null);
//   const [nextId, setNextId] = useState(4);
//   const [topics, setTopics] = useState([
//     { id: 1, title: '[긴급]용산구에 큰 화재가 났어요', body: '갈만한 시설 중 추천해주세요!' },
//     { id: 2, title: '이번 여름엔 비가 많이 오네요', body: '홍수가 날까봐 걱정입니다.' },
//     { id: 3, title: '영등포구 시설 소개', body: '좋은 시설이 많네요' },
//     { id: 4, title: '화재 시 대피 요령!!', body: '내용 대피요령' },
//     { id: 5, title: '지도 보기 도움~~!!~~!!', body: '내용 지도' },
//     { id: 6, title: '[긴급] 현재 양천구에서 시설을 찾아요', body: 'ㅊㅊ부탁' },
//   ]);
//   let content = null;
//   let contextControl = null;
//   if (mode === 'WELCOME') {
//     content = <Article title="반딧불 이야기 게시판 입니다" body="새 글을 작성해 소통해 보세요!"></Article>;
//   } else if (mode === 'READ') {
//     let title,
//       body = null;
//     for (let i = 0; i < topics.length; i++) {
//       if (topics[i].id === id) {
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = <Article title={title} body={body}></Article>;
//     contextControl = (
//       <>
//           <a
//             className='button1'
//             href={'/update/' + id}
//             onClick={(event) => {
//               event.preventDefault();
//               setMode('UPDATE');
//             }}
//           >
//             글 수정하기
//           </a>
//           <input
//           className='button2'
//             type="button"
//             value="글 삭제하기"
//             onClick={() => {
//               alert("삭제 하시겠습니까?")
//               const newTopics = [];
//               for (let i = 0; i < topics.length; i++) {
//                 if (topics[i].id !== id) {
//                   newTopics.push(topics[i]);
//                 }
//               }
//               setTopics(newTopics);
//               setMode('WELCOME');
//             }}
//           />
//       </>
//     );
//   } else if (mode === 'CREATE') {
//     content = (
//       <Create
//         onCreate={(_title, _body) => {
//           const newTopic = { id: nextId, title: _title, body: _body };
//           const newTopics = [...topics];
//           newTopics.push(newTopic);
//           setTopics(newTopics);
//           setMode('READ');
//           setId(nextId);
//           setNextId(nextId + 1);
//         }}
//       ></Create>
//     );
//   } else if (mode === 'UPDATE') {
//     let title,
//       body = null;
//     for (let i = 0; i < topics.length; i++) {
//       if (topics[i].id === id) {
//         title = topics[i].title;
//         body = topics[i].body;
//       }
//     }
//     content = (
//       <Update
//         title={title}
//         body={body}
//         onUpdate={(title, body) => {
//           console.log(title, body);
//           const newTopics = [...topics];
//           const updatedTopic = { id: id, title: title, body: body };
//           for (let i = 0; i < newTopics.length; i++) {
//             if (newTopics[i].id === id) {
//               newTopics[i] = updatedTopic;
//               break;
//             }
//           }
//           setTopics(newTopics);
//           setMode('READ');
//         }}
//       ></Update>
//     );
//   }
//   return (
//     <FullBody>
      
//         <ListPart>
//           <Header
//             className="title"
//             title="게시판"
//             onChangeMode={() => {
//               setMode('WELCOME');
//             }}
//           ></Header>
//           <Nav
//           className="nav"
//             topics={topics}
//             onChangeMode={(_id) => {
//               setMode('READ');
//               setId(_id);
//             }}
//           ></Nav>
//               <a
//                 className='buttons'
//                 href="/create"
//                 onClick={(event) => {
//                   event.preventDefault();
//                   setMode('CREATE');
//                 }}
//               >
//                 글 작성하기
//               </a>
//         </ListPart>
//         <OneArticle>
//           {content}
//           <div>
//             {contextControl}
//           </div>
//         </OneArticle>
      
//     </FullBody>
//   );
// }

// const FullBody = styled.div`
//   color: ${PRIMARY_COLOR};
//   display: flex;
//   justify-content: center;
//   height: 600px;
//   padding-bottom: 120px;
//   background-color: ${COLOR_WHITE};
//   .button1{
//     text-decoration: none;
//     color: ${COLOR_WHITE};
//     background-color: ${PRIMARY_COLOR};
//     border-radius: 10px;
//     padding: 10px;
//     margin: 0 10px 0 300px;
//     }
//     .button2{
//       text-decoration: none;
//       color: ${COLOR_WHITE};
//       background-color: ${PRIMARY_COLOR};
//       border-radius: 10px;
//       padding: 10px;
//       }
// `

// const ListPart = styled.div`
//   width: 300px;
//   height: 500px;
//   background: ${COLOR_WHITE};
//   margin: 10px;
//   border-radius: 20px;
//   border-style: solid;
//   border-color: ${PRIMARY_COLOR};
//   border-width: 10px;
//   .title {
//     display:flex;
//     justify-content:center;
//   }
//   .buttons {
//     text-decoration: none;
//     color: ${COLOR_WHITE};
//     background-color: ${PRIMARY_COLOR};
//     border-radius: 10px;
//     padding: 10px;
//     margin: 20px 20px 20px 100px;
//   }
//   `

//   const OneArticle = styled.div`
  
//   width: 500px;
//   height: 500px;
//   background: ${COLOR_WHITE};
//   margin: 10px;
//   border-radius: 20px;
//   border-style: solid;
//   border-color: ${PRIMARY_COLOR};
//   border-width: 10px;

  
//   `

// export default App;

