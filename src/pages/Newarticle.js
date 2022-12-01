import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Newarticle() {
  return (
    <div className="container mt-5">
      <div className="blogtitle mb-3">
        <h1>New Article</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the blog title here"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the description of the blog here"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
