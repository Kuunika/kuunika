import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme';
import Btn from '../Button';
import { ellipses } from '../../services/utils/helpers';
import { Collapse } from '@material-ui/core';
import { icon } from '@fortawesome/fontawesome-svg-core';

function CategoryCard({ title, content, onClick, icons }: Props) {
  const [more, setMore] = useState(false);
  const length = 100;
  const hasIcon = icons && icons.length > 0;
  const formatedContent = ellipses(content, length);
  return (
    <Wrapper data-testid="category-card" hasIcon={hasIcon}>
      <Title>{title}</Title>
      <ContentContainer>
        <Collapse in={more} collapsedHeight={130}>
          <Content>
            {more ? content : formatedContent}{' '}
            {content.length > length &&
              (more ? (
                <More onClick={() => setMore(false)}>Less</More>
              ) : (
                <More onClick={() => setMore(true)}>More</More>
              ))}
          </Content>
        </Collapse>
        <Icons count={icons.length}>
          {icons.map((icon, index) => (
            <i key={`${index}${icon.replace(/ /gi, '_')}`} className={icon}></i>
          ))}
        </Icons>
      </ContentContainer>
      <BtnContainer>
        <Btn onClick={onClick}>VIEW</Btn>
      </BtnContainer>
    </Wrapper>
  );
}

export default CategoryCard;

interface Props {
  title: string;
  content: any;
  icons?: Array<string>;
  onClick: Function;
}
const Wrapper = styled('div')<{ hasIcon: boolean }>`
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  text-align: ${props => (props.hasIcon ? 'left' : 'center')};
`;

const Title = styled.div`
  color: ${theme.darkColor};
  font-size: 2rem;
  font-weight: bold;
`;

const Content = styled.p`
  margin: 2rem 1rem 2rem 0rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: gray;
  min-height: 92px;
  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;

const More = styled.span`
  padding: 0.4rem;
  cursor: pointer;
  background: #ededed;
  font-size: 0.7rem;
  border-radius: 4px;
`;

const BtnContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icons = styled('div')<{ count: number }>`
  white-space: nowrap;
  i {
    font-size: ${props => (props.count > 1 ? '4.2rem' : '5rem')};
    color: #6e6c6a;
  }
`;
