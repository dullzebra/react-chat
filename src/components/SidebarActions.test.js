/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SidebarActions from './SidebarActions';

const mockData = {
  disabled: false,
  showAllChats: jest.fn(),
  createChat: jest.fn(),
};

describe('<Sidebar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SidebarActions {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders disabled buttons', () => {
    const tree = renderer.create(<SidebarActions {...mockData} disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
