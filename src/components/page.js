import React from 'react';
import classNames from 'classnames';

export default class Page extends React.Component {

  render() {
    let {kataGroups} = this.props;
    const katasCount = kataGroups.reduce((old, {katas: {length}}) => old + length, 0);
    const {showWorkshopBanner} = this.props;
    return (
      <div>
        <Header />
        <KataGroups groups={kataGroups}/>
        <Footer katasCount={katasCount} />
        <WorkshopBanner showWorkshopBanner={showWorkshopBanner}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>ES6 Katas</h1>
        <p>Learn ES6 by doing it, fix failing tests and keep the learnings.</p>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    const {katasCount} = this.props;
    return (
      <footer>
        <ul>
          <li>maintained by <a href="http://twitter.com/wolframkriesing">Wolfram Kriesing</a></li>
        </ul>
        <ul>
          <li>using <a href="http://tddbin.com">tddbin</a></li>
          <li>{katasCount} katas</li>
        </ul>
        <ul>
          <li>
            <a href="http://github.com/tddbin/es6katas.org">
              <i className="fa fa-github"></i>source on github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/es6katas">
              <i className="fa fa-twitter"></i>@es6katas
            </a>
          </li>
          <li>
            <a type="application/rss+xml" href="./rss/MostRecent.xml">
              <i className="fa fa-rss"></i>RSS
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

class KataGroups extends React.Component {
  render() {
    const {groups} = this.props;
    return (
      <div>
        {groups.map((group) => <KataGroup group={group} isNewestKataCheck={groups.isNewestKata.bind(groups)}
                                          key={group.name}/>)}
      </div>
    );
  }
}

class KataGroup extends React.Component {
  render() {
    const group = this.props.group;
    const {isNewestKataCheck} = this.props;
    return (
      <div className="group">
        <h2>{group.name}</h2>
        {group.katas.map((kata) => <Kata kata={kata} group={group} isNewest={isNewestKataCheck(kata)} key={kata.id}/>)}
      </div>
    );
  }
}

class Kata extends React.Component {
  render() {
    const {kata, isNewest, group} = this.props;
    const {url, name, level} = kata;
    const marker =
      isNewest ? <span className="notification-bubble new">new</span> :
        (level === 'BEGINNER' ? <span className="notification-bubble easy">easy</span> : '');
    return <div className="kata">
      {marker}<a href={url} target="_blank"><KataName name={name} /></a>
      <KataDetails kata={kata} group={group} />
    </div>;
  }
}

class KataName extends React.Component {
  render() {
    const classNames = [];
    
    function renderWithName(name) {
      return <span className={classNames}>
        {name}
      </span>
    }
    
    const {name} = this.props;
    if (name.startsWith('`') && name.endsWith('`')) {
      classNames.push('code');
      const sourceCode = name.substr(1, name.length-2);
      return renderWithName(sourceCode);
    }
    return renderWithName(name);
  }
}

class KataDetails extends React.Component {
  render() {
    const {kata, group} = this.props;
    return (
      <span className="details">
        <h2>#{kata.id} {group.name}: {kata.name}</h2>
        <p>{kata.description}</p>
        Difficulty: {kata.level.toLowerCase()}<br/>
      </span>
    );
  }
}

class WorkshopBanner extends React.Component {
  constructor() {
    super();
    this.state = {bannerIsMinimized: false};
  }

  render() {
    const imageUrl = './workshopbanner.png';
    const workshopUrl = 'http://www.uxebu.com/all-workshops/es6-and-react-js/';
    var classes = classNames({
      'workshop-banner': true,
      'fade-in': this.props.showWorkshopBanner,
      'small': this.state.bannerIsMinimized
    });
    return <div className={classes}>
      <div className="close-button-container">
        <button className="close" onClick={this.minimizeBanner.bind(this)}>[x]</button>
      </div>
      <a href={workshopUrl} target="_blank" onMouseOver={this.maximizeBanner.bind(this)}>
        <img src={imageUrl} alt="ES6+reactjs workshop" width="125" height="195"/>
      </a>
    </div>
  }

  minimizeBanner() {
    this.setState({bannerIsMinimized: true});
  }

  maximizeBanner() {
    this.setState({bannerIsMinimized: false});
  }
}
