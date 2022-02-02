import { Title, Text, Date } from '../../styles/components';

import styled from 'styled-components';

function ArticleItem({ data }) {
  const Item = styled.li`
    margin-bottom: 16px;
  `;

  const ArticleTitle = styled(Title)`
    margin-bottom: 8px;

    color: ${(props) => props.theme.colors.highlight};
  `;

  const ArticleText = styled(Text)`
    margin-bottom: 8px;
  `;

  return (
    <Item>
      <ArticleTitle>
        { data.title }
      </ArticleTitle>
      <ArticleText>
        { data.text }
      </ArticleText>
      <Date>
        { data.date }
      </Date>
    </Item>
  );
}

export default ArticleItem;