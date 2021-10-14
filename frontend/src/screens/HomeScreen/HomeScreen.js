import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/message/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h3 style={{ color: "whitesmoke", margin: "15px 0" }}>Latest products</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varriant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
