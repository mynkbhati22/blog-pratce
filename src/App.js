import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import "./App.css";

function App() {
  const blogInfo = [
    {
      title: "Blog 1",
      date: "20-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
    {
      title: "Blog 2",
      date: "25-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
    {
      title: "Blog 3",
      date: "27-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
    {
      title: "Blog 4",
      date: "28-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
  ];

  const renderBlog = (blogInfo, index) => {
    return (
      <div className="col-lg-6 col-md-12" key={index}>
        <Card className="card mt-5">
          <Card.Body>
            <Card.Title>{blogInfo.title}</Card.Title>
            <Card.Subtitle>{blogInfo.date}</Card.Subtitle>
            <Card.Text>{blogInfo.description}</Card.Text>
            <Stack direction="horizontal" gap={2}>
              <Button variant="primary">{blogInfo.ReadButton}</Button>
              <Button variant="success">{blogInfo.EditButton}</Button>
              <Button variant="danger">{blogInfo.DeleteButton}</Button>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="blogtitle">
          <h1>Blog Articles</h1>
        </div>
        <div className="row">{blogInfo.map(renderBlog)}</div>
      </div>
    </div>
  );
}

export default App;
