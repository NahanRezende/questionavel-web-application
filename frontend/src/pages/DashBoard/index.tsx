import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, Title, Description, ButtonContainer } from './styles';
import MainLogo from '../../assets/main_logo.png';
import Button from '../../components/ButtonLogin';

export const DashBoard: React.FC = () => {
  const history = useHistory();

  const handleCreate = () => {
    history.push('/create-survey');
  };

  const handleList = () => {
    history.push('/list-surveys');
  };

  return (
    <Container>
      <Logo src={MainLogo} />

      <Title>Pesquise</Title>
      <Description>Crie ou responda a Surveys existentes.</Description>
      <ButtonContainer>
        <Button type="button" onClick={handleCreate}>
          criar
        </Button>
        <Button type="submit" onClick={handleList}>
          listar
        </Button>
      </ButtonContainer>
    </Container>
  );
};
