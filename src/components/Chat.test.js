/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

jest.mock('./ChatMessageList', () => () => 'ChatMessageList');
jest.mock('./ChatInput', () => () => 'ChatInput');

const mockData = {
  user: {
    _id: '12344',
  },
  activeChat: {},
  joinChat: jest.fn(),
  messages: [{}],
  sendMessage: jest.fn(),
  isConnected: true,
};

describe('<Chat />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Chat {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
