import React from 'react';
import Post from '../Post/Post';
import stl1 from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
   let postsElements  = props.posts.map(p =>
      <Post message={p.message}/>);

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   }

   return (
      <div className={stl1.post_container}>
         <h3>My posts</h3>

         <div className='new_post'>
            <div className='textarea'>
               <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} maxLength='150' placeholder='Place for write...' cols="40" rows="4" />
            </div>
            <button onClick={addPost} className='btn'>Add Post</button>
         </div>

         <div className='stl1.posts'>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts;