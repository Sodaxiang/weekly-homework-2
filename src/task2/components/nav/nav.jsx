import React, { Component } from "react";
import "./nav.css";
import { Icon } from "choerodon-ui";

class Nav extends Component {
  handleMouseDown = () => {
    alert("sd");
  };
  render() {
    console.log(window.screen.width);
    return (
      <nav>
        <div id="logo">
          <Icon type="wb_cloudy" className="cloud-icon" />
          Hand Cloud Platform
        </div>
        <div id="pros" onMouseDown={this.handleMouseDown}>
          {/* <span id="icon1"> */}
          <Icon type="widgets" className="widgets-icon" />
          销售项目A
          {/* <span id="icon2"> */}
          <Icon type="baseline-arrow_drop_down" className="arrow-down-icon" />
          {/* </span> */}
        </div>
        <div id="sets">
          设置
          <Icon type="settings" className="settings-icon" />
          {/* <span id="icon3" /> */}
        </div>
        <div id="nav-tag">
          <div id="tag">M</div>
        </div>
      </nav>
    );
  }
}
export default Nav;
