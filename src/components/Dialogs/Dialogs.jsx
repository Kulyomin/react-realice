import React from 'react';
import stl from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} surname={d.surname}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<div className={stl.dialogs}>
            {/*Собеседники*/}
            <div className={stl.dialogs_items}>
                {dialogsElements}
            </div>

            {/*Сообщения*/}
            <div className={stl.messages_container}>
                <div className={stl.messages}>
                    {messagesElements}
                </div>
                <div className={stl.message_action}>
                    <div className={stl.message_textarea}>
                        <textarea
                            className={stl.textarea}
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'
                            name=""
                            id=""
                            cols="30"
                            rows="10">
                        </textarea>
                    </div>
                    <div>
                        <button className={stl.message_btn} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Dialogs;