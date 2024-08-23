import React, { Component } from "react";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="my-4">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <h2>
              We can't find the page that you're looking for. Check the URL and
              try again.
            </h2>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;
