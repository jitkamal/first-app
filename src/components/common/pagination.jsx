import React, { Component } from "react";
import _ from "lodash";
import { PropTypes } from "prop-types";

class Pagination extends Component {
  render() {
    const { itemCount, pageSize, onPageChange, currentPage } = this.props;
    console.log(currentPage);
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) {
      return null;
    }
    const pages = _.range(1, pageCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
