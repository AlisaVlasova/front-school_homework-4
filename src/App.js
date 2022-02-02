import styled from 'styled-components';

import Header from './components/Header';
import ArticleList from './components/ArticleList';
import GlobalStyles from './styles/global';
import  { Wrapper, Icon, Container, Text } from './styles/components';
 
import logo from './logo.svg';

function App() {
  const AppContainer = styled(Container)`
    justify-content: flex-start;

    max-width: 500px;
  `;
  return (
    <>
    <Wrapper>
      <Header></Header>
      <AppContainer>
        <Icon>
          <img src={logo} alt="Avatar" />
        </Icon>
        <Text>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </AppContainer>
      
      <ArticleList></ArticleList>
    </Wrapper>
    <GlobalStyles />
    </>
  );
}

export default App;