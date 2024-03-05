import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import CardPost from "../../views/CardPost/CardPost";
import { Col, Row } from "react-bootstrap";


const Home = () => {

  const allPosts = useSelector(getAllPosts);

    return(
      <div>
        <h2>All posts</h2>
        <Row xs={1} sm={2} md={3} className="justify-content-between">
          {allPosts.map( post =>  <Col key={post.id}><CardPost {...post}/></Col>  )}
        </Row>
      </div>
    );
  };
  
  export default Home;