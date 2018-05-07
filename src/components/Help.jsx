import React from "react";
import Header from "./Header";

const Help = () => (
  <div className="container">
    <Header tagline="Your questions will be answered here" />
    <dl>
      <dt> Where the data is stored</dt>
      <dd> We store all information in the local storage</dd>
    </dl>
  </div>
);

export default Help;
