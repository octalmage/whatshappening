import React from 'react';
import { Animated } from 'react-web-animation';


export default class Transition extends React.Component {

  getKeyFrames() {
    return [
      { transform: 'scale(0)', opacity: 0, offset: 0 },
      { transform: 'scale(.5)', opacity: 0.5, offset: 0.5 },
      { transform: 'scale(1)', opacity: 1, offset: 1 }
    ];
  }

  getTiming(duration) {
    return {
      duration,
      easing: 'ease-in-out',
      delay: 0,
      iterations: 1,
      fill: 'forwards'
    };
  }

  render() {
    const { children, location } = this.props;
    return (
      <Animated.div key={location.pathname} keyframes={this.getKeyFrames()}
        timing={this.getTiming(500)}>
        {children}
      </Animated.div>
    );
  }
}