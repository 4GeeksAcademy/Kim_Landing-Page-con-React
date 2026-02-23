import { Container, Button } from "react-bootstrap";

export function Hero() {
  return (
    <header className="bg-light py-5">
  <Container className="px-lg-5 text-center">
        <h1 className="fw-bold">A Warm Welcome!</h1>
        <p className="lead">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
  eligendi, in quo sunt possimus non incidunt odit vero aliquid similique
  quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
</p>
        <Button variant="primary" size="lg">Call to action!</Button>
      </Container>
    </header>
  );
}
