import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Birthday extends Component {
  render() {
    return (
      <div>
        <h1>Happy Birthday Budi</h1>
          <ReactPlayer
            url='https://budi-birthday-message.s3.amazonaws.com/message.mp4'
            playing={true}
            loop={true}
            width='100%'
            height='80%'
            playIcon={<button>Play</button>}
            playsinline
            light="https://m.media-amazon.com/images/I/51UW1849rJL._AC_SY355_.jpg"
          />
      </div>
    )
  }
}
