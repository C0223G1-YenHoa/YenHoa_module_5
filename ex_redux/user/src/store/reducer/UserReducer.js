
const initialValue = {
    users: []
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            console.log(action.type);
            console.log(action.payload );
            return {
                ...state,users: action.payload 
                
                
            };
        case 'DELETE_USER':
            console.log(action.type);
            console.log(state);
            return {
                ...state,users: state.users.filter((user)=> user.id !== action.payload )
            };
           
        default:
            return state;
    }
}