import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app'> 
            <Header/>
            <div className='container'>
               <div className='main'>
                  <Navbar/>
                  <div className='content'>
                     <Routes>
                        <Route path="/profile" element = {<Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs" element = {<Dialogs state={props.state.dialogsPage}/>}/>
                     </Routes>
                  </div>
               </div>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
