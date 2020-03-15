import React from "react";
import { formatPrice } from "../helpers";

class Item extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const {
      name,
      image,
      desc,
      additionalDesc,
      price,
      status,
      quantity
    } = this.props.details;
    const isAvailable = status === "available";
    //console.log("roder in item");
    return (
      <React.StrictMode>
        <li className="menu">
          <img src={image} alt=""></img>
          <h3 className="item-name">
            {name}
            <span className="price">{formatPrice(price)}</span>
          </h3>
          <p>{desc}</p>
          {additionalDesc ? (
            <b class="additional-desc">Additional Offers on this item</b>
          ) : (
            <b></b>
          )}
          <p>{additionalDesc}</p>
          <button
            onClick={this.handleClick}
            disabled={!isAvailable || this.props.order[1] >= quantity}
          >
            {!isAvailable
              ? `sold out`
              : this.props.order[1] >= quantity
              ? `only ${this.props.order[1]} items available`
              : `Add To Order`}
          </button>
        </li>
      </React.StrictMode>
    );
  }
}

export default Item;
