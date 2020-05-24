import React, { Component } from 'react'
import Timestamp from 'react-timestamp';

export default class Comment extends Component {
  render() {
    return (
        <section className="comments">
          <p className="comments__name">{this.props.name} 
            <span className="comments__time"><Timestamp >{this.props.timestamp}</Timestamp></span>
          </p>
          <p className="comments__comment">{this.props.comment}</p>
        </section>
    )
  }
}
