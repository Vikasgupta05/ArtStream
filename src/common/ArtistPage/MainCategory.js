import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const MainCategory = ({ categoryTitle, artists }) => {
  return (
    <Container>
      <h2 className="mt-3">{categoryTitle}</h2>
      <Row className="justify-content-center mt-4">
        {artists.map((artist, index) => (
          <Col xs={4} sm={2} md={2} lg={2} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Img variant="top" src={artist.image} alt={artist.name} />
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainCategory;