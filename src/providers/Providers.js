import React from 'react';
import MuiProvider from './MuiProvider';

const providers = [
  MuiProvider, 
];

const Providers = ({
  children, 
}) => {
  return providers.reduce((children, Provider) => (
    <Provider>
      {children}
    </Provider>
  ), children);
}

export default Providers
