import React from "react";
import { FaSortDown } from "react-icons/fa";

class SearchList extends React.Component {
  render() {
    return (
      <div className="search-list">
        <input
          className=""
          id="SearchItem"
          placeholder="Please Search Items"
          type="search"
          aria-label="Search Appointments"
          onChange={e => this.props.searchItem(e.target.value)}
        />
        <button
          className="sort-items"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => this.props.changeOrder(this.props.orderDir)}
        >
          <FaSortDown
            onClick={e => this.props.changeOrder(this.props.orderDir)}
          />
          Sort
        </button>
      </div>
    );
  }
}
export default SearchList;
