import React from 'react';

export default class FooterComponent extends React.Component {
  render() {
    const {katasCount} = this.props;
    return (
      <footer>
        <ul>
          <li>by</li>
          <li>
            <a href="http://twitter.com/wolframkriesing">
              <i className="fa fa-twitter"></i>Wolfram Kriesing
            </a>
          </li>
          <li>
            <a href="/imprint">
              <i className="fa fa-paragraph"></i>imprint
            </a>
          </li>
        </ul>
        
        <ul>
          <li>
            <a href="http://tddbin.com">uses TDDbin</a>
          </li>
          <li>{katasCount} katas</li>
        </ul>
        
        <ul>
          <li>
            <a href="http://github.com/tddbin/es6katas.org">
              <i className="fa fa-github"></i>source of this site
            </a>
          </li>
          <li>
            <a href="http://github.com/tddbin/katas">
              <i className="fa fa-github"></i>all katas
            </a>
          </li>
          <li>
            <a href="https://twitter.com/es6katas">
              <i className="fa fa-twitter"></i>ES6 Katas
            </a>
          </li>
          <li className="disabled">
            <i className="fa fa-rss"></i>RSS
          </li>
        </ul>
      </footer>
    );
  }
}
