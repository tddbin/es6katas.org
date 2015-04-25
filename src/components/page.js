import React from 'react';

export default class Page extends React.Component {

  render() {
    let {kataGroups} = this.props;
    return (
      <div id="page-wrapper-only-for-react">
        <h1>ES6 Katas</h1>
        <p>Just learn a bit of ES6 daily, take one kata a day and fix it away.</p>
        <KataGroups groups={kataGroups} />
        <footer>an <a href="http://uxebu.com">uxebu</a> project, using <a href="http://tddbin.com">tddbin</a></footer>
      </div>
    );
  }
}

class KataGroups extends React.Component {
  render() {
    const {groups} = this.props;
    return (
      <div>
        {groups.map((group) => <KataGroup group={group}/>)}
      </div>
    );
  }
}

class KataGroup extends React.Component {
  render() {
    const name = this.props.group.name;
    const group = this.props.group;
    return (
      <div className="group">
        <h2>{name}</h2>
        {group.map((link) => <KataLink {...link}/>)}
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