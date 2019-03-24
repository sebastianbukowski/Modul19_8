import React from 'react';
import styles from './Comment.css'
const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} 
    <span>votes: {votes}</span> 
    <button className= "press" onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button className= "press" onClick={() => thumbDownComment(id)}>Thumb down</button>
  </li>;

export default Comment;