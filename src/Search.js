import React from "react";

export default function Search() {
  return (
    <form className="mb-3">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="🔍Search location ..."
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" class="btn btn-danger w-100" />
        </div>
        <div className="col-1">
          <span className="current-location">
            <button type="button" className="btn btn-light w-600">
              <span />
              🎯
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
