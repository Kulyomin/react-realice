import React from 'react';
import stl from './DialogItems.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={stl.dialog}>
            <img alt='UserImage'
                 src='https://static.tildacdn.com/tild3739-6430-4136-b536-343732316235/man_2_2x.png'></img>
            <NavLink to={path} className={stl.dialog_link}>{props.name + ' ' + props.surname}</NavLink>
        </div>
    );
}

export default DialogItem;