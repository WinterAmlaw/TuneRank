import { Link } from 'react-router-dom';

export const A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
`;

export const StyledButton = styled.button`
  height: 46px;
  width: 200px;
  border: none;
  background-color: #f60;
  color: #fff;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f90;
  }
`;