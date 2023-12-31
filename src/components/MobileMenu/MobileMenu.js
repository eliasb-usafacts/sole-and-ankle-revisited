/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Navigation Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </CloseButton>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
  margin: -16px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${COLORS.overlay};
  padding-left: 25vw;
`;

const Content = styled(DialogContent)`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  padding: 26px 32px 32px;
  justify-content: space-between;

  @media ${QUERIES.tablet} {
    padding-right: 32px;
  }

  @media ${QUERIES.mobile} {
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 1.125rem;

  & a {
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;

    &:first-of-type {
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

export default MobileMenu;
