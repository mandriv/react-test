import React from 'react';
import { shallow } from 'enzyme';
import Cake from './Cake';

describe('Component: <Cake>', () => {
  it('Renders <Cake>', () => {
    const cake = {
      title: 'Testy Cake',
      desc: 'description of test cake',
      image: 'https://picsum.photos/400',
    };
    const cakeComponent = shallow(<Cake item={cake} />);
    expect(cakeComponent).toMatchSnapshot();
  });
});
