let rerenderEntireTree = () => {
    console.log('rerenderEntireTree');
}

let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hello, bro this is my new profile!'},
            {id:2, message:'I live very cool'},
            {id:3, message:'This day is so bad for me.....'},
            {id:4, message:'I learn react on high level to come Frontend Developer'},
        ],
        newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Elizabeth', surname:'Romans'},
            {id: 2, name: 'Daniil', surname:'Olius'},
            {id: 3, name: 'Evgenii', surname:'Kuley'},
            {id: 4, name: 'Amir', surname:'Sergious'},
            {id: 5, name: 'Vadim', surname:'Konish'},
        ],
        messages: [
            {id:1, message:'Hi, bro!)'},
            {id:2, message:'Hello, how are you?'},
            {id:3, message:"I'm fine thanks you"},
            {id:4, message:'Quite'},
            {id:5, message:'Yea'},
        ],
    },
    sidebar: {},
}

export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;