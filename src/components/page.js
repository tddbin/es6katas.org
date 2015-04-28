import React from 'react';

export default class Page extends React.Component {

  render() {
    let {kataGroups} = this.props;
    const numKatas = kataGroups.reduce((old, {kataLinks: {length}}) => old + length, 0);
    return (
      <body>
        <h1>ES6 Katas</h1>
        <p>Just learn a bit of ES6 daily, take one kata a day and fix it away.</p>
        <KataGroups groups={kataGroups} />
        <footer>
          <a href="http://uxebu.com">uxebu</a> project --- 
          using <a href="http://tddbin.com">tddbin</a> ---  
          on <a href="http://github.com/tddbin/es6katas.org">github</a> ---  
          {numKatas} katas --- 
          follow <a href="https://twitter.com/es6katas">@es6katas</a>
        </footer>
        <script src="./index.js" type="application/javascript"></script>
      </body>
    );
  }
}

class KataGroups extends React.Component {
  render() {
    const {groups} = this.props;
    return (
      <div>
        {groups.map((group) => <KataGroup group={group} key={group.name}/>)}
      </div>
    );
  }
}

class KataGroup extends React.Component {
  render() {
    const name = this.props.group.name;
    const kataLinks = this.props.group.kataLinks;
    return (
      <div className="group">
        <h2>{name}</h2>
        {kataLinks.map((link) => <KataLink {...link} key={link.text}/>)}
      </div>
    );
  }
}

class KataLink extends React.Component {
  render() {
    const {url, text} = this.props;
    return <a href={url}>{text}</a>;
  }
}