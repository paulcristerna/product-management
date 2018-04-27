import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l12 s12">
              <h5 className="white-text">{this.props.title}</h5>
              <p className="grey-text text-lighten-4">
                Github: <a href={this.props.link} className="white-text" title={this.props.title} target="blank">{this.props.link}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by <a className="grey-text" href="http://materializecss.com">Paul Cristerna</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Navigation;
