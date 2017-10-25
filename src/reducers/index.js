import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'
import characters_json from '../data/characters.json';
import { combineReducers } from 'redux'

function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return state.filter((character) => character.id !== action.payload);
    case REMOVE_CHARACTER:
      const character = createCharacter(action.payload);
      return [...state,character]
    default:
      return state;
  }
}

function heros(state=[], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      const character = createCharacter(action.payload);
      return [...state, character];
    case REMOVE_CHARACTER:
      return state.filter(hero => hero.id !== action.payload);
    default:
      return state;
  }
}

function createCharacter(id) {
  let character = characters_json.find(c => c.id === id);
  return character;
}


export default combineReducers({
  characters,
  heros,
})
