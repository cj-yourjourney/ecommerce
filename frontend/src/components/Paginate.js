import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }
    console.log(page);

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={{
              pathname: "/",
              search: `/?keyword=${keyword}&page=${x + 1}`,
            }}
          >
            <Pagination.Item>
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
