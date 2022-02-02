import styled from 'styled-components';

import ArticleItem from '../ArticleItem';

function ArticleList() {
  const data = [
    {
      id: 0,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '27 Feb 2020',
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '27 Feb 2020',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '27 Feb 2020',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '27 Feb 2020',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '27 Feb 2020',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '27 Feb 2020',
    },
  ]

  const List =  styled.ul`
    margin-top: 21px;
  `;

  return (
    <List>
      {
        [...data].map(item => (
          <ArticleItem data={item} key={item.id}></ArticleItem>
        ))
      }
    </List>
  );
}

export default ArticleList;