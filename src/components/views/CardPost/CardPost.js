import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPost = props => {
  return(
    <Card style={{ width: '22rem' }} className='my-3'>
      <Card.Body>
        <Card.Title className='mb-3'>{props.title}</Card.Title>
        <Card.Text className='mb-0'><b>Author: </b>{props.author}</Card.Text>        
        <Card.Text><b>Published: </b>{props.publishedDate}</Card.Text>        
        <Card.Text>{props.shortDescription}</Card.Text>
        <Button variant="primary">Read more</Button>     
      </Card.Body>
    </Card>
  );
};

export default CardPost;