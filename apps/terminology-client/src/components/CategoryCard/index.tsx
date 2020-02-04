import React from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme';
import Btn from '../Button';

function CategoryCard({ title, content, onClick }: Props) {
  return (
    <Wrapper data-testid="category-card">
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Btn onClick={onClick}>VIEW</Btn>
    </Wrapper>
  );
}

export default CategoryCard;

interface Props {
  title: string;
  content: any;
  onClick: Function;
}
const Wrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

const Title = styled.div`
  color: ${theme.darkColor};
  font-size: 2rem;
  font-weight: bold;
`;

const Content = styled.p`
  margin: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: gray;
`;
