import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryPosts } from "../../../redux/postsRedux";
import CardPost from "../../views/CardPost/CardPost";

const SingleCategory = () => {
  const {id} = useParams();
  const allCategoryPosts = useSelector( state => getCategoryPosts(state, (id[0].toUpperCase() + id.slice(1))));

  return(
    <>
      <h2>Category: {id[0].toUpperCase() + id.slice(1)}</h2>
      <Row xs={1} sm={2} md={3} className="justify-content-between">
        {allCategoryPosts.map( post => <Col><CardPost key={post.id} {...post}/></Col> )}
      </Row>
    </>
  );
};

export default SingleCategory;