/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatAvatar from './ChatAvatar';

describe('<ChatAvatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatAvatar name="Piggy Chat Title" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatAvatar name="Piggy Chat Title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
