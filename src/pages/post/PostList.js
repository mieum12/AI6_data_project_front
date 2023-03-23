import { Link } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { Post } from "../../components";

const PostListPage = (props) => {
  return (
    <>
      <Post />
      <Link to={ROUTE.CREATEPOST_PAGE.link}>
        <button>글 작성하기</button>
      </Link>
    </>
  );
};

export default PostListPage;
