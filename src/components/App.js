import React from "react";
import "../css/App.css";
import Item from "./Item";
import sampleItems from "../sample-data";
import Header from "./Header";
import Order from "./Order";
import SearchList from "./SearchList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sortList = this.sortList.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }
  state = {
    items: [],
    order: {},
    queryText: "",
    sortList: false,
    orderDir: "desc"
  };
  componentDidMount() {
    this.setState({ items: sampleItems });
  }
  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  deleteFromOrder = key => {
    console.log("delete from order");
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  sortList(list) {
    this.setState({ sortList: true });
  }

  searchItem(searchText) {
    this.setState({
      queryText: searchText
    });
  }
  changeOrder(dir) {
    dir = dir === "desc" ? (dir = "asc") : (dir = "desc");
    this.setState({
      orderDir: dir
    });
  }
  removeFromOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] - 1;
    if (order[key] === 0) {
      delete order[key];
    }
    this.setState({ order });
  };

  render() {
    let order;
    let filteredItems = this.state.items;
    {
      this.state.orderDir === "desc" ? (order = 1) : (order = -1);
    }

    // if (this.state.sortList) {
    filteredItems = filteredItems.sort((a, b) => {
      if (a["name"].toLowerCase() < b["name"].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    });
    // }

    filteredItems = filteredItems.filter(item => {
      return (
        item["name"]
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        item["desc"].toLowerCase().includes(this.state.queryText.toLowerCase())
      );
    });

    return (
      <div className="shopping-cart">
        <div className="menu">
          <Header
            name="ProShopping"
            tagline="one stop shop for all your fashion needs"
          />
          <SearchList
            sortList={this.sortList}
            orderDir={this.state.orderDir}
            changeOrder={this.changeOrder}
            searchItem={this.searchItem}
          />
          <ul>
            {filteredItems.map((item, key) => (
              <Item
                key={key}
                index={key}
                order={this.state.order}
                details={item}
                addToOrder={this.addToOrder}
              ></Item>
            ))}
          </ul>
        </div>
        <Order
          items={filteredItems}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
          deleteFromOrder={this.deleteFromOrder}
        />
      </div>
    );
  }
}

export default App;
