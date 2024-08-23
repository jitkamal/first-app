import React from "react";
const SearchBox = ({ value, onChange }) => {
  debugger;
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col-10">
            <div className="form-outline mb-4" data-mdb-input-init>
              <input
                type="text"
                className="form-control"
                id="datatable-search-input"
                name="query"
                value={value}
                onChange={onChange}
              />
              <label className="form-label" htmlFor="datatable-search-input">
                Search
              </label>
            </div>
            <div id="datatable"></div>
          </div>

          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};
export default SearchBox;
