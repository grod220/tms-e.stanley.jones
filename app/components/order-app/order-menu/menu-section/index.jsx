import React from 'react';
import styled from 'styled-components';

import MenuItem from './menu-item';

const CategoryTitle = styled.h2`
  font-weight: normal;
  margin-bottom: 10px;
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  user-select: none;
`;

const MenuSection = ({ data: { category, items } }) => {
  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <MenuItems>
        {items.map((item, i) => (
          <MenuItem category={category} itemData={item} key={i} />
        ))}
      </MenuItems>
    </>
  );
};

export default MenuSection;
