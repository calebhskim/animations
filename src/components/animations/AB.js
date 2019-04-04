import React from 'react';
import anime from 'animejs';

class AB extends React.Component {
  componentDidMount() {
    var timeline = anime.timeline();
    timeline
      .add({
        easing: 'linear',
        opacity: 1.0,
        targets: '.ab .one',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.ab .two',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.ab .three',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.ab .four',
      });
  }

  render() {
    return (
      <div className='animation ab'>
      <svg width="266" height="99" viewBox="0 0 266 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <rect className="background" x="4" width="122.222" height="89.404" rx="4" fill="white"/>
        <rect className="background" x="139" y="1" width="122.222" height="89.404" rx="4" fill="white"/>
        <rect className="one" x="20" y="19" width="90" height="10" rx="2" fill="#F20600"/>
        <rect className="one" x="20" y="35" width="30" height="5" rx="2" fill="#F20600"/>
        <rect className="two" x="20" y="44" width="30" height="5" rx="2" fill="#F20600"/>
        <rect className="four" x="20" y="66" width="30" height="5" rx="2" fill="#F20600"/>
        <rect className="one" x="59" y="35" width="51" height="36" rx="2" fill="#F20600"/>
        <rect className="three" x="20" y="55" width="30" height="5" rx="2" fill="#F20600"/>
        <rect className="one" x="155" y="35" width="30" height="5" rx="2" fill="#00B248"/>
        <rect className="four" x="155" y="66" width="30" height="5" rx="2" fill="#00B248"/>
        <rect className="two" x="155" y="44" width="30" height="5" rx="2" fill="#00B248"/>
        <rect className="one" x="155" y="19" width="90" height="10" rx="2" fill="#00B248"/>
        <rect className="one" x="194" y="35" width="51" height="36" rx="2" fill="#00B248"/>
        <rect className="three" x="155" y="55" width="30" height="5" rx="2" fill="#00B248"/>
        </g>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="265.222" height="98.404" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
      </svg>
      </div>
    );
  }
}

export default AB;
