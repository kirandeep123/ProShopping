import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

class Order extends React.Component {
  renderOrder = key => {
    const item = this.props.items[key];
    const count = this.props.order[key];
    if (!item) return null;
    const isAvailable = item && item.status === "available";

    if (!isAvailable) {
    }
    return (
      <li key={key} className="orders">
        {item.name}
        <span>{count}</span>
        <FaMinusCircle onClick={() => this.props.removeFromOrder(key)} />
        {count * item.price}

        <MdCancel onClick={() => this.props.deleteFromOrder(key)} />
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const item = this.props.items[key];
      const count = this.props.order[key];
      const isAvailable = item && item.status === "available";
      if (isAvailable) {
        return prevTotal + count * item.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div>
        <h2>Order</h2>
        {orderIds.map(this.renderOrder)}
        <div className="total">
          Total : <span></span>
          <strong className="total-count">{total}</strong>
        </div>{" "}
      </div>
    );
  }
}
export default Order;
