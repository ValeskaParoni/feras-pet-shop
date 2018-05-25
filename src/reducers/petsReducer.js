import pets from '../../resources/pets.json';


const initialState = {
  "pets": pets
};


const petsReducer = (state = initialState, action) => {

    switch(action.type) {

        default:
            return state;
    }
}

export default petsReducer;