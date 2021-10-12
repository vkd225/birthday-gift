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
            playsinline={true}
            muted={true}
            width='100%'
            height='80%'
            playIcon={<button>Play</button>}
            light="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&w=325&dpr=1"
          />
      </div>
    )
  }
}
