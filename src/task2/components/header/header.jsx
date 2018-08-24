import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        {/* df */}
        {/* <span>ewjtk</span> */}
        <h1 id="greet">Wen:您好！欢迎使用</h1>
        <div id="intro">
          Choerodon猪齿鱼是一个开源企业服务平台，是基于Kubernetes的容器编排和管理能力，
          整合DevOps工具链、微服务和移动应用框架，来帮助企业实现敏捷化的应用交付和自动化的运营管理，
          并提供IoT、支付、数据、智能洞察、企业应用市场等业务组件，来帮助企业聚焦于业务，加速数字化转型。
        </div>
      </header>
    );
  }
}

export default Header;
