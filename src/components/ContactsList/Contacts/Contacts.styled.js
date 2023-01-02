import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 0;
  background-color: #4f83cc;
  border-radius: 20px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  //flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  flex-grow: 1;
  color: #edffff;
  span {
    font-size: 20px;
    color: #edffff;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin-left: 10px;
  height: 30px;
  border-radius: 45%;
  /* background-color: ${props => props.color}; */
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    color: #bdbdbd;
  }
  &:hover {
    svg {
      color: #2196f3;
    }
  }
`;
