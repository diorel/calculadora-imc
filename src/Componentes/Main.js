import React from 'react';

export default function Main({ children, center }) {
  let classes = ` ${center ? 'Main--center' : ''}`;
  return <main className={classes}>{children}</main>;
}
