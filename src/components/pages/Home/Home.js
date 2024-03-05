import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import CardPost from "../../views/CardPost/CardPost";
import { Row } from "react-bootstrap";


const Home = () => {

  const allPosts = useSelector(getAllPosts);

    return(
      <div>
        <h2>All posts</h2>
        <Row className="justify-content-between">
          {allPosts.map( post =>  <CardPost key={post.id} {...post}/>  )}
        </Row>
      </div>
    );
  };
  
  export default Home;