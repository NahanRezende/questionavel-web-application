import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Button from '../../components/ButtonLogin';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidateErrors';

import { ReactComponent as MailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as EmailErrorIcon } from '../../assets/icons/email_vermelho.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as UserErrorIcon } from '../../assets/icons/user_vermelho.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import { ReactComponent as PasswordErrorIcon } from '../../assets/icons/password_vermelho.svg';
import {
  Container,
  Content,
  LoginContainer,
  ContainerResetPassword,
  Title,
  Separator,
  Label,
  ButtonContainer,
  Back,
} from './styles';
import api from '../../services/api';

interface ICreateAccount {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

export const CreateAccount: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const creationSuccess = useCallback(() => {
    Swal.fire(
      'Sua conta foi criada',
      'Informamos que sua conta foi criada com sucesso!',
      'info',
    );
  }, []);

  const creationError = useCallback(() => {
    Swal.fire(
      'Erro',
      'Ocorreu um erro ao criar a conta, por favor tente novamente!',
      'error',
    );
  }, []);

  const handleSubmit = useCallback(
    async (data: ICreateAccount) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          name: Yup.string().required('Nome obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
          passwordConfirmation: Yup.string().required(
            'Confirmação de senha obrigatória',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const apiR = await api.post('/signup', {
          email: data.email,
          name: data.name,
          password: data.password,
          passwordConfirmation: data.passwordConfirmation,
        });

        console.log(apiR.data);

        creationSuccess();

        history.push('/');
      } catch (err) {
        creationError();

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      } finally {
        setLoading(false);
      }
    },
    [history, creationSuccess, creationError],
  );

  return (
    <Container>
      <Content>
        <LoginContainer>
          <ContainerResetPassword>
            <Title>Criar Conta</Title>
            <Separator />
          </ContainerResetPassword>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              icon={MailIcon}
              iconError={EmailErrorIcon}
            />

            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              type="name"
              icon={UserIcon}
              iconError={UserErrorIcon}
            />

            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              icon={PasswordIcon}
              iconError={PasswordErrorIcon}
            />

            <Label htmlFor="passwordConfirmation">Confirmação de Senha</Label>
            <Input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              icon={PasswordIcon}
              iconError={PasswordErrorIcon}
            />

            <ButtonContainer>
              <Button type="submit" loading={loading}>
                Criar
              </Button>
            </ButtonContainer>

            <Back>
              <Link to="/">Voltar</Link>
            </Back>
          </Form>
        </LoginContainer>
      </Content>
    </Container>
  );
};
