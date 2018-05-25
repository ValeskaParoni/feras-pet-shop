import pets from '../../resources/pets.json';


const initialState = {
  "pets": pets
};


const petsReducer = (state = initialState, action) => {

    switch(action.type) {


        case 'EDIT_PET':
               return { 
                    ...state,
                    pets: state.pets.map(
                       (currentPet, i) => {
                            if(currentPet.id === action.updatedPet.id){
                                return {...currentPet, ...action.updatedPet};
                            }
                            else {
                                return currentPet;
                            }

                        }
                   )
                }

        case 'DELETE_PET':
                return{
                    ...state,
                    pets: state.pets.filter((pet, i) => pet.id !== action.petId)

                }


        default:
            return state;
    }
}

export default petsReducer;