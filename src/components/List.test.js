import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import Cake from './Cake';

describe('Component: <List>', () => {
  it('Renders <List>', () => {
    const cakesList = [
      {
        title: 'Testy Cake',
        desc: 'description of test cake',
        image: 'https://picsum.photos/400',
        id: '0',
      },
      {
        title: 'Testarossa Cake',
        desc: 'description of this cake',
        image: 'https://picsum.photos/400',
        id: '1',
      },
    ];
    const listComponent = shallow(<List items={cakesList} RowComponent={Cake} />);
    expect(listComponent).toMatchSnapshot();
  });
});
