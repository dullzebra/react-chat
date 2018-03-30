import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import initials from '../utils/initials';
import getColor from '../utils/color-from';

export default function ChatAvatar({ name }) {
  return <Avatar style={{ backgroundColor: getColor(initials(name)) }}>{initials(name)}</Avatar>;
}

ChatAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};
