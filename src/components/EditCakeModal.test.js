import React from 'react';
import { shallow } from 'enzyme';
import EditCakeModal from './EditCakeModal';

describe('Component: <EditCakeModal>', () => {
  it('Renders <EditCakeModal>', () => {
    const cake = {
      title: 'Testy Cake',
      desc: 'description of test cake',
      image: 'https://picsum.photos/400',
    };
    const editCakeComponent = shallow(<EditCakeModal cake={cake} />);
    expect(editCakeComponent).toMatchSnapshot();
  });
});
