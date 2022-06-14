import styled from 'styled-components';
import Input from '../../components/Input';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #c7eff7;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsideContainer = styled.div`
  margin-top: 2rem;

  width: 50vw;

  background: #f3f3f3;
  padding: 16px 20px;
  border: solid;
  border-width: 0.1rem;
  border-color: #4682b4;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  align-self: flex-start;
  svg {
    width: 64px;
    height: 64px;
  }
  background: none;
  border: none;
  cursor: pointer;
`;

export const QuestionTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #4682b4;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #4682b4;
  margin-top: 5rem;
`;

export const StyledInput = styled(Input)`
  background: white;
  width: 100% !important;
`;

export const Label = styled.label`
  color: #4682b4;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  text-align: start;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
