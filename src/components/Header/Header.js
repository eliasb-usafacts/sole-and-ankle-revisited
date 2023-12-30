import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileIcons>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open menu</VisuallyHidden>
            <Icon id="menu" />
          </UnstyledButton>
        </MobileIcons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MobileIcons = styled.div`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    justify-content: flex-end;
    gap: 32px;
  }

  @media ${QUERIES.mobile} {
    gap: 17px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media ${QUERIES.tablet} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;
  }

  @media ${QUERIES.mobile} {
    padding: 0px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.5rem,
    9vw - 4rem,
    5rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tablet} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
