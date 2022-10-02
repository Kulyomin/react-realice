import React from 'react';
import './ProfileInfo.css';
import background from '../../../images/background.jpg';

const ProfileInfo = () => {
   return (
      <div>
         <img alt='Фон контента' className="user_img" src={background}></img>
         <div className='user'>
            <img alt='UserImage'
                 src='https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png'></img>
            <div className='user_info'>
               <p className='Name'><b>Name:</b>Kulyomin Evgenii</p>
               <p className='Age'><b>Age:</b>19</p>
               <p className='City'><b>City:</b>Moscow</p>
            </div>
         </div>
      </div>
   );
}

export default ProfileInfo;