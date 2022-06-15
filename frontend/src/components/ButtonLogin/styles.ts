import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  width: 10.438rem;
  height: 2.563rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.625rem;

  background: #1b2838;
  border: none;
  color: white;

  transition: background-color 0.2s;

  .loader {
    margin-top: 0.4rem;
  }

  &:hover {
    background: ${shade(0.4, '#174C82')};
  }

  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
