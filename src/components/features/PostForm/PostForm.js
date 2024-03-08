import PropTypes from 'prop-types';
import { Button, Col, Form } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from 'react-quill'
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';


const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [author, setAuthor] = useState(props.author || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  
  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if ( content && publishedDate ){
      action({title, shortDescription, content, publishedDate, author});
    }
  };

  return(
    <Form onSubmit={validate(handleSubmit)}>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Title:</Form.Label>
        <Form.Control 
        {...register("title", {required: true, minLength: 4})}
         minLength={4} value={title} type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} 
        />
        {errors.title && <span className="d-block form-text text-danger mt-2">This field is required</span>}
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Author:</Form.Label>
        <Form.Control 
        {...register("author", {required: true, minLength: 4})}
        minLength={4} value={author} type="text" placeholder="John Doe" onChange={e => setAuthor(e.target.value)}
        />
        {errors.author && <span className="d-block form-text text-danger mt-2">This field is required</span>}
    </Form.Group>
    <Form.Group className="mt-3" as={Col} md={6}>
        <Form.Label>Published:</Form.Label><br />
        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">Please choose date</small>}
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Short description:</Form.Label>
        <Form.Control 
        {...register("shortDescription", {required: true, minLength: 20})}
         as='textarea' rows={3} value={shortDescription} placeholder="Leave a comment here" onChange={e => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && <span className="d-block form-text text-danger mt-2">This field is required(minLength: 20)</span>}
    </Form.Group>
    <Form.Group className="mt-3" as={Col} >
        <Form.Label>Main content:</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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