import React from 'react';

type Props = {
  children: any;
};

const SimpleLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SimpleLayout;
