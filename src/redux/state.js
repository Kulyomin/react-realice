const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hello, bro this is my new profile!' },
            { id: 2, message: 'I live very cool' },
            { id: 3, message: 'This day is so bad for me.....' },
            { id: 4, message: 'I learn react on high level to come Frontend Developer' },
         ],
         newPostText: 'it-kamasutra.com',
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Elizabeth', surname: 'Romans' },
            { id: 2, name: 'Daniil', surname: 'Olius' },
            { id: 3, name: 'Evgenii', surname: 'Kuley' },
            { id: 4, name: 'Amir', surname: 'Sergious' },
            { id: 5, name: 'Vadim', surname: 'Konish' },
         ],
         messages: [
            { id: 1, message: 'Hi, bro!)' },
            { id: 2, message: 'Hello, how are you?' },
            { id: 3, message: "I'm fine thanks you" },
            { id: 4, message: 'Quite' },
            { id: 5, message: 'Yea' },
         ],
         newMessageBody: "",
      },
      sidebar: {},
   },
   _callSubscriber() {
      console.log('rerenderEntireTree');
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   updateNewMessageBody(newText) {
      this._state.dialogsPage.newMessageBody = newText;
      this._callSubscriber(this._state);
   },
   sendMessage(message) {
      this._state.dialogsPage.messages.push({id: 6, message: message});
      this._callSubscriber(this._state);
   },

   dispatch(action) {
      if(action.type === 'ADD-POST') {
         this.addPost();
      } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
         this.updateNewPostText(action.newText);
      } else if(action.type === 'UPDATE-NEW-MESSAGE-BODY') {
         this.updateNewMessageBody(action.body);
      } else if(action.type === 'SEND-MESSAGE') {
         let message = this._state.dialogsPage.newMessageBody;
         this._state.dialogsPage.newMessageBody = '';
         this.sendMessage(message);
      }

   },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: text});

export default store;
window.store = store;