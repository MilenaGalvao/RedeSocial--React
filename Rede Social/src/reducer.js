export default function reducer(state, action){
    switch(action.type){
        case "CRIAR_POST":
            const newPost = action.payload;
            return { ...state, posts: [newPost, ...state.posts]};
        case "REMOVER_POST":
            return 0;
        default: 
            return state;
    }
}