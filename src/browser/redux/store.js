import { createStore, applyMiddleware } from 'redux';

const reducer = ( state = { red: 0, blue:0 }, action ) =>{
  switch( action.type ){
    case 'INCREMENT_BLUE':
      state = Object.assign( {}, state, { blue: state.blue + 1 });
      break;
    case 'INCREMENT_RED':
      state = Object.assign( {}, state, { red: state.red + 1 });
      break;
  }
  return state;
};

const store = createStore( reducer );
store.dispatch({ type: 'INCREMENT_BLUE' });

export default store;
