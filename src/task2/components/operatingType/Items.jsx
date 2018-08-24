import React, { Component } from "react";
import "./Items.css";

// import svg1 from "../../../assets/1.svg";
// import svg2 from "../../../assets/2.svg";
// import svg3 from "../../../assets/3.svg";
// import svg4 from "../../../assets/4.svg";
// import svg5 from "../../../assets/5.svg";
// import svg6 from "../../../assets/6.svg";
// import svg7 from "../../../assets/7.svg";
// import svg8 from "../../../assets/8.svg";
// import svg9 from "../../../assets/9.svg";
// import svg10 from "../../../assets/10.svg";
// import svg11 from "../../../assets/11.svg";
// import svg12 from "../../../assets/12.svg";
// import svg13 from "../../../assets/13.svg";
// import svg14 from "../../../assets/14.svg";

// const imgsArr = [
//   svg1,
//   svg2,
//   svg3,
//   svg4,
//   svg5,
//   svg6,
//   svg7,
//   svg8,
//   svg9,
//   svg10,
//   svg11,
//   svg12,
//   svg13,
//   svg14
// ];
// var i = -1;
class Items extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let items = this.props.items;
    let opratingList = null;
    opratingList = items.map(ele => {
      // i = i + 1;
      // console.log(i);
      // console.log(img);
      return (
        <div key={ele.id} className="item">
          <img
            // src={require(ele.itemImg)}
            // src={imgsArr[i]}
            src={require(`../../../assets/${ele.itemImg}`)}
            alt=""
          />
          <h4 className="item-title">{ele.itemTitle}</h4>
          <div className="item-content">{ele.itemContent}</div>
        </div>
      );
    });
    return <div> {opratingList}</div>;
  }
}

export default Items;
