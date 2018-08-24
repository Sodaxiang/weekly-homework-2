import React, { Component, Fragment } from "react";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import OperatingType from "./components/operatingType/operatingType";
import Footer from "./components/Footer/footer";
class Root extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Header>asdh</Header>
        <OperatingType />
        <Footer />
      </Fragment>
    );
  }
}

export default Root;
