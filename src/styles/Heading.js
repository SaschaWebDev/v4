import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';
    margin-right: 10px;
    font-family: ${fonts.SFMono};
    font-weight: normal;
    color: ${colors.slate};
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 4px;
    ${media.tablet`font-size: ${fontSizes.lg};`};
  }

  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background-color: ${colors.mediumGrey};
    position: relative;
    top: -5px;
    margin-left: 20px;
    ${media.desktop`width: 200px`};
    ${media.tablet`width: 100%;`};
    ${media.thone`margin-left: 10px;`};
  }
`;

export default Heading;
