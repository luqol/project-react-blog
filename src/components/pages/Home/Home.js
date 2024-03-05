import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import CardPost from "../../views/CardPost/CardPost";
import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Home = () => {

  const allPosts = useSelector(getAllPosts);

    return(
      <div>
        <Row className="justify-content-between">
        <Col xs={2}> <h2>All posts</h2> </Col>
        <Col xs={2} className="text-end"> <Button as={NavLink}  to={'/post/add'} variant="outline-info">Add Post</Button> </Col>
        </Row>
        
        <Row xs={1} sm={2} md={3} className="justify-content-between">
          {allPosts.map( post =>  <Col key={post.id}><CardPost {...post}/></Col>  )}
        </Row>
      </div>
    );
  };
  
  export default Home;