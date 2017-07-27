import axios from 'axios';

const initialState = {
  person: {},
  planet: {},
  loading: false
};

const PERSON = 'PERSON';
const PLANET = 'PLANET';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PERSON +'_PENDING':
      return Object.assign({}, state, {loading: true});
    case PERSON + '_FULFILLED':
      return Object.assign({}, state, {loading: false, person: action.payload});
    case PLANET + '_PENDING':
      return Object.assign({}, state, {loading: true});
    case PLANET + '_FULFILLED':
      return Object.assign({}, state, {loading: false, planet: action.payload});
    default:
      return state;
  }
}

export function getPerson(){
  let promise = axios.get('https://swapi.co/api/people/1').then(response => response.data);
  return {
    type: PERSON,
    payload: promise
  }
}

export function getPlanet() {
  let promise = axios.get('http://swapi.co/api/planets/1').then(response => response.data);
  return {
    type: PLANET,
    payload: promise
  }
}