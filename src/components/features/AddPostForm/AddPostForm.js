import { Button, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";


const AddPostForm = () => {
    const navigate = useNavigate();
    let postData ={
        title: '',
        shortDescription: '',
        content: '',
        publishedDate: '',
        author: '',
    };
    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(postData);
        dispatch(addPost(postData));

        navigate('/');
    };

  return(
   <Form onSubmit={handleSubmit}>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={e => postData.title = e.target.value} />
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" placeholder="John Doe" onChange={e => postData.author = e.target.value}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Published:</Form.Label>
        <Form.Control type="date" onChange={e => postData.publishedDate = e.target.value}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Short description:</Form.Label>
        <Form.Control as='textarea' rows={3} placeholder="..." onChange={e => postData.shortDescription = e.target.value}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Main content:</Form.Label>
        <Form.Control as='textarea' rows={6} placeholder="..." onChange={e => postData.content = e.target.value}/>
    </Form.Group>


    <Button className="mt-3" type="submit">Add Post</Button>
   </Form>
  );
};

export default AddPostForm;