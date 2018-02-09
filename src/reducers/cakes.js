import {
  ADD_CAKES,
  CLEAR_CAKES,
  UPDATE_CAKE,
  REMOVE_CAKE,
} from '../actions/cakes';

export const initialState = [];

export default function CakesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAKES:
      return action.cakes;
    case CLEAR_CAKES:
      return initialState;
    case UPDATE_CAKE:
      return state.map((cake) => {
        if (cake.id === action.cake.id) {
          return { ...cake, ...action.cake };
        }
        return cake;
      });
    case REMOVE_CAKE:
      return state.filter(cake => cake.id !== action.id);
    default:
      return state;
  }
}
