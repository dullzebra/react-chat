import React from 'react';
import Avatar from 'material-ui/Avatar';
import initials from '../utils/initials';

export default function ChatAvatar({ name }) {
  return <Avatar>{initials(name)}</Avatar>
}
