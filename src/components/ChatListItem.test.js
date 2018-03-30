/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ChatListItem from './ChatListItem';

jest.mock('moment', () => () => ({ fromNow: () => '3 дня назад' }));

const mockData = {
  id: 'abc',
  title: 'Meoooow',
  date: '2018-03-23T08:06:56.789Z',
  disabled: false,
};

describe('<ChatListItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatListItem {...mockData} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <ChatListItem {...mockData} />
              </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
