import Card from 'react-bootstrap/Card';

const CardPost = props => {
  return(
      <Card className='border border-0' style={{ width: '18rem' }}>
        <Card.Body className='pt-0'>
          <Card.Title className='mb-3'>{props.title}</Card.Title>
          <Card.Text className='mb-0'><b>Author: </b>{props.author}</Card.Text>        
          <Card.Text><b>Published: </b>{props.publishedDate}</Card.Text>        
          <Card.Text>{props.content}</Card.Text>    
        </Card.Body>
      </Card>
  );
};

export default CardPost;