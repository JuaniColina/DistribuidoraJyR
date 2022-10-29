import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({product, deleteItem}) => {
    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                     {product.item.title}
                    </Col>
                    <Col>
                     Cantidad :{product.count}
                    </Col>
                    <Col>
                     ${product.item.price}
                    </Col>
                    <Col>
                     <Button variant='danger' onClick={() => deleteItem(product.item.id)}>Delete</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CartItem