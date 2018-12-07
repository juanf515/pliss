import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'


export default class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <VideoPlayerLayout>
            <video 
            src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
            autoPlay
            controls/>
 
        </VideoPlayerLayout>
      </div>
    )
  }
}
