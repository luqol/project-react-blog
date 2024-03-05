import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById, removePost } from '../../../redux/postsRedux';
import SingleCardPost from '../../views/SingleCardPost/SingleCardPost';
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmModal from '../../views/ConfirmModal/ConfirmModal';

const SinglePost = () => {
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  const dispatch = useDispatch();

  const deletePost =  e => {
    e.preventDefault();
    dispatch( removePost(id));
  };

  if (!postData) return <Navigate to='/' />
  else return(
    <>
      <Row >
        <Col xs={8} className='d-flex justify-content-center'>
          <SingleCardPost {...postData} />
        </Col>
        <Col xs={4}>
          <Button as={NavLink}  to={'/post/edit/' + id} variant="outline-primary" className='me-2'>Edit</Button> 
          <Button variant="outline-danger" onClick={ () => setModalShow(true)}>Delete</Button> 
        </Col>
      </Row>
      <ConfirmModal show={modalShow} onHide={() => setModalShow(false)}  deletePost={ deletePost} />
    </>
  );
};
  
  export default SinglePost;