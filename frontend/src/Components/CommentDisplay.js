
import React, { Component } from 'react'
import Comment from './Comment'
export default class CommentDisplay extends Component {
  render() {
    
    let mainVideo = this.props.currentVideo;
    if(mainVideo != null)
    return (
      mainVideo.map((video,i) => {
          return(
            <Comment key= {i}
              name = {video.name}
              comment = {video.comment}
              timestamp = {video.timestamp}
              />)
               })
           )
           else{
             return 'empty'
           }
  }
}
