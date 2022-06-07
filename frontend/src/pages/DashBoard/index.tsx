import React from 'react';
import { Container, Logo, Title, Description, ButtonContainer } from './styles';
import MainLogo from '../../assets/main_logo.png';
import Button from '../../components/ButtonLogin';

export const DashBoard: React.FC = () => {
  return (
    <Container>
      <Logo src={MainLogo} />

      <Title>Pesquise</Title>
      <Description>
        Um aplicativo simples que permite que você crie livremente uma pesquisa
        ou responda a uma das muitas pesquisas que temos.
      </Description>
      <ButtonContainer>
        <Button type="submit">Criar Pesquisa</Button>
        <Button type="submit">Listar Pesquisa</Button>
      </ButtonContainer>
    </Container>
  );
};
