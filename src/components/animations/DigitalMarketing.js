import React from 'react';
import anime from 'animejs';

import GoogleAdsLogo from './GoogleAdsLogo';
import FacebookAdsLogo from './FacebookAdsLogo';

class DigitalMarketing extends React.Component {
  componentDidMount() {
    var timeline = anime.timeline();
    timeline
      .add({
        duration: 2000,
        easing: 'linear',
        opacity: 1.0,
        targets: '.digital-marketing',
      })
  }

  render() {
    return (
      <div className="animation digital-marketing">
        <GoogleAdsLogo />
        <FacebookAdsLogo />
      </div>
    );
  }
}

export default DigitalMarketing;
