import { Reducer } from 'redux-testkit';
import CakesReducer, { initialState } from './cakes';
import * as actions from '../actions/cakes';

describe('Cakes reducer', () => {

  it('Should return initial state', () => {
    const action = 'SOMETHING_RANDOM';
    Reducer(CakesReducer).expect(action).toReturnState(initialState);
  });

  it('Should handle adding cakes to fresh state', () => {
    const cakesList = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const action = actions.addCakes(cakesList);
    Reducer(CakesReducer).expect(action).toReturnState(cakesList);
  });

  it('Should handle replacing cakes', () => {
    const state = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const newCakesList = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
    ];
    const action = actions.addCakes(newCakesList);
    Reducer(CakesReducer).withState(state).expect(action).toReturnState(newCakesList);
  });

  it('Should handle clearing cakes', () => {
    const state = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const action = actions.clearCakes();
    Reducer(CakesReducer).withState(state).expect(action).toReturnState(initialState);
  });

  it('Should handle updating a cake that exists', () => {
    const state = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const newCake = {
      title: 'Even better test cake',
      id: '1',
    };
    const action = actions.updateCake(newCake);
    const expectedState = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Even better test cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    Reducer(CakesReducer).withState(state).expect(action).toReturnState(expectedState);
  });

  it('Should handle updating a cake that doesn\'t exists', () => {
    const state = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const newCake = {
      title: 'Even better test cake',
      id: 'sfsdfasfsa',
    };
    const action = actions.updateCake(newCake);
    Reducer(CakesReducer).withState(state).expect(action).toReturnState(state);
  });

  it('Should handle updating a cake that exists', () => {
    const state = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const action = actions.removeCakeById('0');
    const expectedState = [
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    Reducer(CakesReducer).withState(state).expect(action).toReturnState(expectedState);
  });

  it('Should handle updating a cake that does not exist', () => {
    const state = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const action = actions.removeCakeById('-1');
    Reducer(CakesReducer).withState(state).expect(action).toReturnState(state);
  });
});
