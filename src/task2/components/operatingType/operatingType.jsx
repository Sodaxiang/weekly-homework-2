import React, { Component } from "react";
import { ITEM_LIST } from "../../config/config";
import Items from "./Items";
import "./operatingType.css";
class OperatingType extends Component {
  render() {
    let itemList = null;
    itemList = ITEM_LIST.map(item => {
      return (
        <div key={item.id} className="operating-type">
          <h3 className="type-title">{item.title}</h3>
          <Items key={item.id} items={item.items} />
        </div>
        // <div>skfhk</div>
      );
    });
    // console.log(ITEM_LIST);
    return (
      <div className="operating-types">
        {itemList}
        {/* <h3>快速入门</h3> */}
        {/* <img src={require("../../../assets/1.svg")} alt="" /> */}
      </div>
    );
  }
}

export default OperatingType;
