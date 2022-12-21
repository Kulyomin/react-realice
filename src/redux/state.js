import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, bro this is my new profile!'},
                {id: 2, message: 'I live very cool'},
                {id: 3, message: 'This day is so bad for me.....'},
                {id: 4, message: 'I learn react on high level to come Frontend Developer'},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Elizabeth', surname: 'Romans'},
                {id: 2, name: 'Daniil', surname: 'Olius'},
                {id: 3, name: 'Evgenii', surname: 'Kuley'},
                {id: 4, name: 'Amir', surname: 'Sergious'},
                {id: 5, name: 'Vadim', surname: 'Konish'},
            ],
            messages: [
                {id: 1, message: 'Hi, bro!)'},
                {id: 2, message: 'Hello, how are you?'},
                {id: 3, message: "I'm fine thanks you"},
                {id: 4, message: 'Quite'},
                {id: 5, message: 'Yea'},
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    /* Сообщение о перерисовке страницу */
    _callSubscriber() {
        console.log('rerenderEntireTree');
    },
    /* Получить текущий state management */
    getState() {
        return this._state;
    },
    /* Уведомляем сервер об изменении внутри state */
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    /*Метод dispatch() передает объект, известный как действие, в Redux*/
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;