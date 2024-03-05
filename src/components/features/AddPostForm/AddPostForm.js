import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import { useState } from "react";


const AddPostForm = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [author, setAuthor] = useState('');
 
    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();

        dispatch(addPost({title, shortDescription, content, publishedDate, author}));

        navigate('/');
    };

  return(
   <Form onSubmit={handleSubmit}>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={e => setTitle(e.target.value) } />
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" placeholder="John Doe" onChange={e => setAuthor(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Published:</Form.Label>
        <Form.Control type="date" onChange={e => setPublishedDate(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Short description:</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder="..." onChange={e => setShortDescription(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Main content:</Form.Label>
        <Form.Control as='textarea' rows={6} placeholder="..." onChange={e => setContent(e.target.value)}/>
    </Form.Group>


    <Button className="mt-3" type="submit">Add Post</Button>
   </Form>
  );
};

export default AddPostForm;