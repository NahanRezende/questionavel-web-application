import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Logo, Title, Description, ButtonContainer } from './styles';
import MainLogo from '../../assets/main_logo.png';
import Button from '../../components/ButtonLogin';
import { useAuth } from '../../hooks/auth';

export const DashBoard: React.FC = () => {
  const history = useHistory();
  const { signOut } = useAuth();

  const handleCreate = () => {
    history.push('/create-survey');
  };

  const handleList = () => {
    history.push('/list-surveys');
  };

  return (
    <Container>
      <Logo src={MainLogo} />
      <Title>Questionável</Title>
      <Description>
        Um aplicativo simples que permite que você crie livremente uma pesquisa
        ou responda a uma das muitas pesquisas que temos.
      </Description>
      <ButtonContainer>
        <Button type="button" onClick={handleCreate}>
          criar
        </Button>
        <Button type="button" onClick={handleList}>
          listar
        </Button>
        <Button type="button" onClick={signOut}>
          trocar conta
        </Button>
      </ButtonContainer>
    </Container>
  );
};
