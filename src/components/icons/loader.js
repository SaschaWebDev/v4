import React from 'react';

import logo from '../icons/sascha_logo_v3.png';

const IconLoader = () => (
  <img
    src={logo}
    alt="sascha logo"
    height="42"
    width="42"
    style={{
      transform: `scaleX(0.9)`,
      marginTop: `10px`,
      marginLeft: `2px`,
    }}
  />
);

export default IconLoader;
