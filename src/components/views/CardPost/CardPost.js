import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { dateToStr } from '../../../utils/dateToStr';

const CardPost = props => {
  return(
      <Card className='my-3'>
        <Card.Body>
          <Card.Title className='mb-3'>{props.title}</Card.Title>
          <Card.Text className='mb-0'><b>Author: </b>{props.author}</Card.Text>        
          <Card.Text><b>Published: </b>{dateToStr(props.publishedDate)}</Card.Text>
          <Card.Text><b>Category: </b>{props.category}</Card.Text>        
          <Card.Text>{props.shortDescription}</Card.Text>
          <Button as={NavLink}  to={'/post/' + props.id} variant="primary">Read more</Button>     
        </Card.Body>
      </Card>
  );
};

export default CardPost;