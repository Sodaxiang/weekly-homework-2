import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="foot-tag1">
          <dl>
            <dt>互动</dt>
            <dd>博客</dd>
            <dd>社区</dd>
          </dl>
        </div>
        <div className="foot-tag2">
          <dl>
            <dt>快捷链接</dt>
            <dd>文档</dd>
            <dd>案例</dd>
          </dl>
        </div>
      </footer>
    );
  }
}
export default Footer;
