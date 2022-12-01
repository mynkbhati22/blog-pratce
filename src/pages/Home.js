import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home({ blogInfo, renderBlog }) {
  return (
    <div className="container mt-5">
      <div className="blogtitle">
        <h1>Blog Articles</h1>
      </div>
      <div className="mt-3">
        <Button variant="success">
          <Link
            to="/create-new-article"
            className="text-light text-decoration-none"
          >
            New Article
          </Link>
        </Button>
      </div>
      <div className="row">{blogInfo.map(renderBlog)}</div>
    </div>
  );
}
