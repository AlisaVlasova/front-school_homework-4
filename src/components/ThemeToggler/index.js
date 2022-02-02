import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../themeProvider';

const Toggler = styled.label.attrs({htmlFor: 'checkbox'})`
  position: relative;

  width: 50px;
  height: 25px;

  background: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 30px;
`;

const Circle = styled.div`
  position: absolute;

  left: ${(props) => props.theme.name === 'light' ? '0' : 'auto'};
  right: ${(props) => props.theme.name === 'dark' ? '0' : 'auto'};

  width: 50%;
  height: 100%;

  border: 1px solid ${(props) => props.theme.colors.background};
  background: ${(props) => props.theme.colors.text};
  border-radius: 50%;

  transition: 0.3s;
`;

const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Toggler>
      <input
        hidden
        id="checkbox"
        type="checkbox"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      <Circle></Circle>
    </Toggler>
  );
};

export default ThemeToggler;