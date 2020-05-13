import React from 'react';
import styled from 'styled-components';

import addZeroIfNeeded from '../../../utilities/add-zero';

const Wrapper = styled.div`
  display: ${(props) => (props.activeSection === props.category ? 'flex' : 'none')};
  transition: opacity 0.2s linear;
  opacity: ${(props) => (props.activeSection === props.category ? props.opacity : 0)};
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 2rem;
  flex: 1;
`;

const AllItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LineItem = styled.div`
  padding: 2rem;
`;

const Price = styled.span`
  color: #902e2d;
`;

const SectionDescription = ({ category, items, activeSection, opacity }) => (
  <Wrapper activeSection={activeSection} category={category} opacity={opacity}>
    <AllItems>
      {items.map((item, i) => (
        <LineItem key={i}>
          {item.name} :: <Price>{'$' + addZeroIfNeeded(item.price)}</Price>
          {item.extra && <i>({item.extra})</i>}
        </LineItem>
      ))}
    </AllItems>
  </Wrapper>
);

export default SectionDescription;
