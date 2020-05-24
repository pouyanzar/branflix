import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../CSS/upload.css'
export default class Upload extends Component {
  render() {
    return (
      <div className="upload">
        <Link to='/Upload'><img src='/Assets/Icons/Large Upload.svg' alt='Upload'/></Link>
        <p className='upload__h4'>Select files to upload</p>
        <p className='upload__h5'>Or drag and drop video files</p>
      </div>
    )
  }
}
