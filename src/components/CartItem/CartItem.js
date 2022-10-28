import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({product, handleDelete}) => {
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
                     <Button variant='danger' onClick={handleDelete(product.item.id)}>Delete</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default CartItem