import React from 'react';

export default class Page extends React.Component {

  render() {
    let {kataGroups} = this.props;
    const numKatas = kataGroups.reduce((old, {katas: {length}}) => old + length, 0);
    return (
      <body>
        <h1>ES6 Katas</h1>
        <p>Just learn a bit of ES6 daily, take one kata a day and fix it away.</p>
        <KataGroups groups={kataGroups} />
        <footer>
          by <a href="http://uxebu.com">uxebu</a> --- 
          using <a href="http://tddbin.com">tddbin</a> ---  
          on <a href="http://github.com/tddbin/es6katas.org">github</a> ---  
          {numKatas} katas --- 
          follow <a href="https://twitter.com/es6katas">@es6katas</a>
        </footer>
        <script src="./index.min.js" type="application/javascript"></script>
        <Analytics />
      </body>
    );
  }
}

class KataGroups extends React.Component {
  render() {
    const {groups} = this.props;
    return (
      <div>
        {groups.map((group) => <KataGroup group={group} isNewestCheck={groups.isNewest.bind(groups)} key={group.name}/>)}
      </div>
    );
  }
}

class KataGroup extends React.Component {
  render() {
    const group = this.props.group;
    const {isNewestCheck} = this.props;
    return (
      <div className="group">
        <h2>{group.name}</h2>
        {group.katas.map((kata) => <Kata kata={kata} isNewest={isNewestCheck(kata)} key={kata.id} />)}
      </div>
    );
  }
}

class Kata extends React.Component {
  render() {
    const {url, name, description, level} = this.props.kata;
    const {isNewest} = this.props;
    const isNewestMarker = isNewest ? <span className="notification-bubble">new</span> : '';
    return <div className="kata">
      {isNewestMarker}<a href={url} target="_blank">{name}</a>
      <span className="details">{description}<br/>Difficulty: {level.toLowerCase()}</span>
    </div>;
  }
}

class Analytics extends React.Component {
  render() {
    const jsCode = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-62726232-1', 'es6katas.org');
          ga('send', 'pageview');
    `;
    return <script dangerouslySetInnerHTML={{__html: jsCode}}></script>
  }
}