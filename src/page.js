import React from 'react';

export default class MainComponent extends React.Component {

  render() {
    let {paths} = this.props;
    const groups = groupedPaths(paths);
    let ret = [];
    for (let groupName in groups) {
      ret.push(kataGroup(groupName, groups[groupName]));
    }
    return (
      <div id="page-wrapper-only-for-react">
        <h1>ES6 Katas</h1>
        <p>Just learn a bit of ES6 daily, take one kata a day and fix it away.</p>
        {ret}
        <footer>an <a href="http://uxebu.com">uxebu</a> project, using <a href="http://tddbin.com">tddbin</a></footer>
      </div>
    );
  }
}

const kataGroup = (groupName, group) => {
  return (
    <div className="group">
      <h2>{groupName}</h2>
      {group.map(tddbinKataLink)}
    </div>
  );
};

const tddbinKataLink = (path) => {
  const [group, sub] = path.replace('katas/es6/language/', '').split('/');
  const link = `http://tddbin.com/#?kata=${path.replace('katas/', '').replace(/\.js$/, '')}`;
  return <a href={link} target="_blank">{sub}</a>;
};

const groupedPaths = (paths) => {
  let groups = {};
  paths.forEach((path) => {
    const groupName = path.split('/').reverse()[1];
    if (!groups[groupName]) groups[groupName] = [];
    groups[groupName].push(path);
  });
  return groups;
};

