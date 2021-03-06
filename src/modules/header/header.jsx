import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="indigo">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">{this.props.title}</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Products</a></li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li><a href="#">Products</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
