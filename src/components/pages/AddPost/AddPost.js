import { Col, Row } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";


const AddPost = () => {
    return(
      <Row className="justify-content-center">
        <Col md={8}> 
          <h2>Add post</h2>
          <AddPostForm />
        </Col>
      </Row>
    );
  };
  
  export default AddPost;