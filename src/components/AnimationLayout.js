import React from 'react';

import AB from './animations/AB';
import Analytics from './animations/Analytics';
import Chat from './animations/Chat';
import DigitalMarketing from './animations/DigitalMarketing';
import Graph from './animations/Graph';
import Map from './animations/Map';
import Resume from './animations/Resume';

const AnimationLayout = () => {
    return (
        <div className='svgs'>
          <div className='animation'>
            <AB />
            <h3>AB</h3>
          </div>
          <div className='animation'>
            <Analytics />
            <h3>Analytics</h3>
          </div>
          <div className='animation'>
            <Chat />
            <h3>Chat</h3>
          </div>
          <div className='animation'>
            <DigitalMarketing />
            <h3>DigitalMarketing</h3>
          </div>
          <div className='animation'>
            <Graph />
            <h3>Graph</h3>
          </div>
          <div className='animation'>
            <Map />
            <h3>Map</h3>
          </div>
          <div className='animation'>
            <Resume />
            <h3>Resume</h3>
          </div>
        </div>
    );
}

AnimationLayout.propTypes = {}

export default AnimationLayout;
