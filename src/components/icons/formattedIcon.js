import React from 'react';
import PropTypes from 'prop-types';
import { IconGitHub, IconLinkedin, IconCodepen, IconXing, IconTwitter } from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Xing':
      return <IconXing />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGitHub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
