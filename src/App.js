import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Newarticle from "./pages/Newarticle";

function App() {
  const blogInfo = [
    {
      title: "Blog 1",
      date: "20-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read More",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
    {
      title: "Blog 2",
      date: "25-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read More",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
    {
      title: "Blog 3",
      date: "27-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read More",
      EditButton: "Edit",
      DeleteButton: "Delete",
    },
    {
      title: "Blog 4",
      date: "28-11-2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deleniti enim eligendi repellat ex itaque accusamus sequi fuga et mollitia.",
      ReadButton: "Read More",
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
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home blogInfo={blogInfo} renderBlog={renderBlog} />}
          />
          <Route path="/create-new-article" element={<Newarticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
