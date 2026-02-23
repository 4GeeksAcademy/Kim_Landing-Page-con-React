import { Card, Button, Container, Row, Col } from "react-bootstrap";

export function CardsSection() {
  return (
    <Container className="my-5">
      <Row className="gx-5">

        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
            <Card.Body className="text-center">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant="primary">Find Out More!</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
            <Card.Body className="text-center">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant="primary">Find Out More!</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
            <Card.Body className="text-center">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant="primary">Find Out More!</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
            <Card.Body className="text-center">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Card.Text>
              <Button variant="primary">Find Out More!</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}
