import React, { ReactChildren } from 'react';

type Props = {
  children: ReactChildren;
};

const SimpleLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SimpleLayout;
