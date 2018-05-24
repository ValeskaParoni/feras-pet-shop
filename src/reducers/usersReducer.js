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

        case 'EDIT_USER':
               return { 
                    ...state, 
                    userName: action.updatedUser.name,
                    registeredUsers: state.registeredUsers.map(
                       (user, i) => {
                            //SHOULD BE CHANGED IF ID ISN'T INDEX+1
                            if(i === action.updatedUser.id-1){
                                return {...user, ...action.updatedUser};
                            }
                            else {
                                return user;
                            }

                        }
                   )
                }


        default:
            return state;
    }
}

export default usersReducer