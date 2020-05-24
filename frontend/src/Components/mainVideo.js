import React from 'react';
import CommentDisplay from './CommentDisplay';
import AddComment from './AddComment';

class MainVideo extends React.Component
{

    render()
    {
        return(
            <section className="video">
                <video src={this.props.video + '?api_key=c1a04dd4-7ee0-41b1-9822-b92dcec3b769'} controls></video>
                <p className="video__title">{this.props.title}</p>
                <div className="video__detail">
                    <p className="video__view">{this.props.views} views</p>
                    <p className="video__detail--p"><img src='/Assets/Icons/Thumbs Up.svg' alt='Thumbs Up'/>{this.props.thumbsUp}</p>
                    <p className="video__detail--p"><img src='/Assets/Icons/Thumbs Down.svg' alt='Thumbs Down' />{this.props.thumbsDown}</p>
                    <p className="video__detail--p"><img src='/Assets/Icons/Share.svg' alt='Share' />SHARE</p>
                </div>
                <div className="video__publisher">
                    <img className="video__publisher--pic" alt='' />
                    <div className="video__publisher--info">
                        <h4>{this.props.channel}</h4>
                        <h5>'Published on Oct 14, 2015'</h5>
                    </div>
                    <button className="video__subscribe"><span>SUBSCRIBE</span><span className="video__subscribe--view">{this.props.subscriberCount}</span></button>
                </div>
               
                <p className="comments__showmore">SHOW MORE</p>
                <AddComment id = {this.props.id} commentHandler={this.props.commentHandler}/>
                <CommentDisplay currentVideo = {this.props.comments}/>
            </section>

        )
    }
}

export default MainVideo;