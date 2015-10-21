import React from 'react';
import classNames from 'classnames';

export default class WorkshopBannerComponent extends React.Component {
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
