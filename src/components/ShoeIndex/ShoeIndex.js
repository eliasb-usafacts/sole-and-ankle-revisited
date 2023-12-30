import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <VisibleTabletUp>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
              >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
          </Select>
          </VisibleTabletUp>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <VisibleLaptopUp>
          <Spacer size={42} />
          <ShoeSidebar />
        </VisibleLaptopUp>
      </LeftColumn>
    </Wrapper>
  );
};

const VisibleTabletUp = styled.div`
  @media ${QUERIES.mobile} {
    display: none;
  }
`;

const VisibleLaptopUp = styled.div`
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media ${QUERIES.tablet} {
    flex-direction: column-reverse;
    gap: 0;
    align-items: start;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${QUERIES.tablet} {
    flex-basis: revert;
    margin-bottom: -12px;
  }

  @media ${QUERIES.mobile} {
    margin-bottom: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tablet} {
    align-items: end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
