export function nextWeek(){
  return {'type': 'NEXT_WEEK'};
}

export function prevWeek(){
  return {'type': 'PREV_WEEK'};
}

export function setPet(pet_id){
  return {'type': 'SET_PET',
         'pet_id': pet_id };
}

export function setAppointmentDateTime(date, time){
  return {'type': 'SET_DATE_AND_TIME',
         'date': date,
         'time': time };
}