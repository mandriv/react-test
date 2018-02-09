import * as cakes from './cakes';

describe('Cakes actions', () => {

  it('addCakes() - ids assigned', () => {
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
    expect(cakes.addCakes(cakesList)).toEqual({
      type: cakes.ADD_CAKES,
      cakes: cakesList,
    });
  });

  it('addCakes() - ids not assigned', () => {
    const cakesList = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
      },
      {
        title: 'Testier Cake',
        desc: 'description of testier cake',
        image: 'https://picsum.photos/400',
      },
    ];

    const action = cakes.addCakes(cakesList);
    expect(action.type).toEqual(cakes.ADD_CAKES);
    expect(action.cakes).toHaveLength(2);
    expect(action.cakes[0].id).toBeTruthy();
    expect(action.cakes[1].id).toBeTruthy();
  });

  it('updateCake() - valid cake', () => {
    const cake = {
      title: 'Test cake',
      desc: 'description of test cake',
      image: 'https://picsum.photos/400',
      id: 'fsfsf34242',
    };
    expect(cakes.updateCake(cake)).toEqual({
      type: cakes.UPDATE_CAKE,
      cake,
    });
  });

  it('updateCake() - invalid cake', () => {
    const cake = {
      title: 'Test cake',
      desc: 'description of test cake',
      image: 'https://picsum.photos/400',
    };
    const action = () => cakes.updateCake(cake);
    expect(action).toThrow();
  });

  it('updateCake() - null cake', () => {
    const action = () => cakes.updateCake(null);
    expect(action).toThrow();
  });

  it('removeCakeById() - valid id', () => {
    const id = 'fsfsf34242';
    expect(cakes.removeCakeById(id)).toEqual({
      type: cakes.REMOVE_CAKE,
      id,
    });
  });

  it('removeCakeById() - invalid id', () => {
    const id = '';
    const action = () => cakes.removeCakeById(id);
    expect(action).toThrow();
  });

  it('removeCakeById() - null id', () => {
    const action = () => cakes.updateCake(null);
    expect(action).toThrow();
  });

  it('clearCakes()', () => {
    expect(cakes.clearCakes()).toEqual({ type: cakes.CLEAR_CAKES });
  });
});
