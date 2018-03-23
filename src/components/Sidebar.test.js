/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';

jest.mock('./ChatList', () => () => 'ChatList');
jest.mock('./SidebarActions', () => () => 'SidebarActions');

const mockData = {
  chats: {
    active: {},
    allChats: [],
    myChats: [],
  },
  createChat: jest.fn(),
  isConnected: true,
};

describe('<Sidebar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
