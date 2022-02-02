import styled from 'styled-components';

import ThemeToggler from '../ThemeToggler';
import { Container, Title } from '../../styles/components';

function Header() {
const Header = styled(Container)`
  padding: 16px 0;
`;

  return (
    <Header>
      <Title>
        Overreacted
      </Title>
      <ThemeToggler />
    </Header>
  );
}

export default Header;