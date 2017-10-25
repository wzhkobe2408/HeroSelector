export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export function addCharacterById(id){
  return {
    type:ADD_CHARACTER,
    payload:id
  }
}

export function removeCharacterById(id) {
  return {
    type:REMOVE_CHARACTER,
    payload:id
  }
}
