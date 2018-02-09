export const ADD_CAKES = 'ADD_CAKES';
export const CLEAR_CAKES = 'CLEAR_CAKES';
export const UPDATE_CAKE = 'UPDATE_CAKE';
export const REMOVE_CAKE = 'REMOVE_CAKE';

// creates unique identified
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0; // eslint-disable-line
    const v = (c === 'x') ? r : (r & 0x3 | 0x8); // eslint-disable-line
    return v.toString(16);
  });
}

// silly id assigment based on index - this should be returned from api
function assignIds(items = []) {
  return items.map(item => ({
    ...item,
    id: item.id ? item.id : uuidv4(),
  }));
}

// replaces entires array with new cakes
export function addCakes(cakes = []) {
  return {
    type: ADD_CAKES,
    cakes: assignIds(cakes),
  };
}

export function updateCake(cake) {
  if (typeof cake.id === 'undefined') {
    throw new Error('Missing \'id\' field!');
  }
  return {
    type: UPDATE_CAKE,
    cake,
  };
}

export function removeCakeById(id) {
  if (typeof id !== 'string' || id.length === 0) {
    throw new Error('Invalid \'id\' field!');
  }
  return {
    type: REMOVE_CAKE,
    id,
  };
}

export function clearCakes() {
  return { type: CLEAR_CAKES };
}
