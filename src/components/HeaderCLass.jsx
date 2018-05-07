import React, { Fragment } from "react";

//Class component
class Header extends React.Component {
  render() {
    return (
      <Fragment>
        {/* we are building a ToDO app */}
        <h1 className="foo">What to do?</h1>
        <span className="tagline">{this.props.tagline}</span>
      </Fragment>
    );
  }
}

export default Header;
