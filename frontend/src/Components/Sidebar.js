import React from 'react';
import Video from './video';
import {Link} from 'react-router-dom';

class  Sidebar extends React.Component
{
    render()
    {
        let videos = this.props.videoArray;
        
        return (<section className="sidebar">
            <p className="sidebar__title">Up Next</p>
            {(videos).map((video, i) => {
                
                return (<Link key={i} to={'/videos/' + video.id}><Video key ={i} 
                    image={video.image}
                    title = {video.title}
                    channel = {video.channel}
                    duration = {video.duration}
                    views = {video.views}
                    id= {video.id} 
                    /></Link>)        
            }
            )
            }
            
            </section>
        )
    }
}

export default Sidebar;