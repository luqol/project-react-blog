import { Col, Row } from "react-bootstrap";
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const EditPost = () => {
    return(
      <Row className="justify-content-center">
      <Col md={8}> 
        <h2>Edit Post</h2>
        <EditPostForm />
      </Col>
    </Row>
    );
  };
  
  export default EditPost;