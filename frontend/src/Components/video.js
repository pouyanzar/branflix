import React from 'react';

class Video extends React.Component
{
    
    render()
    {
        
        return (
            <div className="videoCard">
                <div className="videoCard__wrapper">
                    <img className="videoCard__image" src={this.props.image} alt={this.props.title} />
                    <p className="videoCard__time">{this.props.duration}</p>
                </div>
                <div className="videoCard__info">
                    <h4>{this.props.title}</h4>
                    <h5>{this.props.channel}</h5>
                    <h5>{this.props.views + ' views'}</h5>
                </div>
            </div>
        )
    }
}

export default Video;