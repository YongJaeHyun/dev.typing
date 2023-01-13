import styled from 'styled-components';
import TextBox from './TextBox';

const UserTextBox = styled(TextBox)`
  min-height: 30px;
  padding-bottom: 5px;
  border-bottom: 3px solid ${(props) => props.theme.accentColor};
`;

export default UserTextBox;
