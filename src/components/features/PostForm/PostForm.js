import PropTypes from 'prop-types';
import { Button, Col, Form } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from 'react-quill'
import DatePicker from "react-datepicker";


const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [author, setAuthor] = useState(props.author || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({title, shortDescription, content, publishedDate, author});
  };

  return(
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Title:</Form.Label>
        <Form.Control value={title} type="text" placeholder="Title" onChange={e => setTitle(e.target.value) } />
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Author:</Form.Label>
        <Form.Control value={author} type="text" placeholder="John Doe" onChange={e => setAuthor(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Published:</Form.Label><br />
        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Short description:</Form.Label>
        <Form.Control as='textarea' rows={3} value={shortDescription} placeholder="..." onChange={e => setShortDescription(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Main content:</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
    </Form.Group>


    <Button className="mt-3" type="submit">{actionText}</Button>
   </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};



export default PostForm;