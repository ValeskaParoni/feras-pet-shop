import registeredUsers from '../../resources/registeredUsers.json'


const initialState = {
  "loggedin": false,
  "userId": -1,
  "isAdmin": false,
  "userName": "",
  "registeredUsers": registeredUsers
};


const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_ACTIVE_USER':
            return (
                    {
                    ...state,
                    
                    "loggedin": action.activeUser.loggedin,
                    "userId": action.activeUser.userId,
                    "isAdmin": action.activeUser.isAdmin,
                    "userName": action.activeUser.userName
                    
                
                    }
    
                );

        case 'LOG_OFF':
            return (
                    {
                    ...state,
                    "loggedin": false,
                    "userId": -1,
                    "isAdmin": false,
                    "userName": ""

                    }    
                );

        case 'ADD_NEW_USER':
            return (
                    {
                        ...state,
                        "registeredUsers": [
                            ...state.registeredUsers,
                            action.newUser
                        ]
                    }

                );



        default:
            console.log(state);
            return state;
    }
}

export default usersReducer