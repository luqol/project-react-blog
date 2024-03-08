import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const allCategories = useSelector(getAllCategories);

  return(
    <Row className="justify-content-center">
      <Col xs={8}>
        <h2>All categories</h2>
        <ListGroup>
            { allCategories.map( category => <ListGroupItem className="border" key ={category.id}> <NavLink to={`/categories/${category.category.toLowerCase()}`}>{category.category}</NavLink> </ListGroupItem>) } 
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Categories;