import React from 'react';
import classNames from 'classnames';

export default class Page extends React.Component {

  render() {
    let {kataGroups} = this.props;
    const numKatas = kataGroups.reduce((old, {katas: {length}}) => old + length, 0);
    const {showWorkshopBanner} = this.props;
    return (
      <div>
        
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a className="pure-menu-heading" href="">Your Site</a>
        
                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tour</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Sign Up</a></li>
                </ul>
            </div>
        </div>
        
        
        <h1>ES6 Katas</h1>
        <p>Just learn a bit of ES6 daily, take one kata a day and fix it away.</p>
        <KataGroups groups={kataGroups} />
        <footer>
          by <a href="http://uxebu.com">uxebu</a> --- 
          using <a href="http://tddbin.com">tddbin</a> ---  
          on <a href="http://github.com/tddbin/es6katas.org">github</a> ---  
          {numKatas} katas --- 
          follow <a href="https://twitter.com/es6katas">@es6katas</a> ---  
          <a type="application/rss+xml" href="./rss/MostRecent.xml">subscribe to RSS</a>
        </footer>
        <WorkshopBanner showWorkshopBanner={showWorkshopBanner} />
      </div>
    );
  }
}

class KataGroups extends React.Component {
  render() {
    const {groups} = this.props;
    return (
      <div>
        {groups.map((group) => <KataGroup group={group} isNewestKataCheck={groups.isNewestKata.bind(groups)} key={group.name}/>)}
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
        {group.katas.map((kata) => <Kata kata={kata} isNewest={isNewestKataCheck(kata)} key={kata.id} />)}
      </div>
    );
  }
}

class Kata extends React.Component {
  render() {
    const {url, name, description, level} = this.props.kata;
    const {isNewest} = this.props;
    const marker = 
      isNewest ? <span className="notification-bubble new">new</span> : 
        (level==='BEGINNER' ? <span className="notification-bubble easy">easy</span> : '');
    return <div className="kata">
      {marker}<a href={url} target="_blank">{name}</a>
      <span className="details">{description}<br/>Difficulty: {level.toLowerCase()}</span>
    </div>;
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
      <div className="close-button-container"><button className="close" onClick={this.minimizeBanner.bind(this)}>[x]</button></div>
      <a href={workshopUrl} target="_blank" onMouseOver={this.maximizeBanner.bind(this)}>
        <img src={imageUrl} alt="ES6+reactjs workshop" width="125" height="195" />
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
