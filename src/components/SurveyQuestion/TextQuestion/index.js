import React from 'react'

import { TextInput } from './styled';

export default function({ question, onChange }) {
  const onValueChange = (ev) => {
    onChange(question, ev.target.value);
  }

  return <TextInput type="text" onChange={onValueChange} />;
}