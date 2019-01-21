import React from 'react';
import ReactDOM from 'react-dom';

import { Dimmer, Loader } from 'semantic-ui-react';

export const ModalLoader = () => {
  return ReactDOM.createPortal(
    <Dimmer style={{ height: '100vh', width: '100%' }} active>
      <Loader>Loading Posts</Loader>
    </Dimmer>,
    document.getElementById('modal')
  );
};
