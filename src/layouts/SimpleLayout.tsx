import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SimpleLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SimpleLayout;
