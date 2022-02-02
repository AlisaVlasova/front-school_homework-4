import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 800px;
  min-height: 100vh;

  margin: 0 auto;
  padding: 0 16px;

  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 180px;

  border-radius: 50%;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Date = styled.span`
  margin-right: auto;

  font-size: 12px;
  text-align: right;

  opacity: 0.5;
`;

