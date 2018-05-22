import React from 'react';
import Story from './Story'
import './Author.css';

const Author = (props) => {
// Create an Author component
return (
  <div className='story-author-info'>
  <img src={props.authImg} className='author-image' />
  <div className='story-author-text'>
    <h4>{props.authName}</h4>
    <h4>{props.estTime} read</h4>
  </div>
  </div>);
}
export default Author;