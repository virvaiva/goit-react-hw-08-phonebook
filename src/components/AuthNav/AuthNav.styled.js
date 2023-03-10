import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.div`
  margin-right: 10px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  &.active {
    color: #fff;
    background-color: #c0c0c0;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fff;
    background-color: #c0c0c0;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
