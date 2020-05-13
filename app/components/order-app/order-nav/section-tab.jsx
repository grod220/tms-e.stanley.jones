import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { media } from '../../../utilities/media';

import OrderStore from '../stores/order-store';

const Section = styled.div`
  color: ${({ active }) => (active ? '#902e2d' : '#4c4c4c')};
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 7rem;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-bottom-color: ${({ active }) => active && '#902e2d'};
  box-sizing: border-box;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  ${media.phone`
    font-size: 16px;
  `}
`;

const SectionTab = observer(({ children: title }) => {
  return (
    <Section onClick={() => (OrderStore.activeTab = title)} active={OrderStore.activeTab === title}>
      {title}
    </Section>
  );
});

export default SectionTab;
