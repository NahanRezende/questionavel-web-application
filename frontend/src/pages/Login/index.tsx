import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Toaster } from 'react-hot-toast';
import { FormHandles } from '@unform/core';
import { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidateErrors';

import Input from '../../components/Input';
import Button from '../../components/ButtonLogin';

import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import { ReactComponent as PasswordErrorIcon } from '../../assets/icons/password_vermelho.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as UserErrorIcon } from '../../assets/icons/user_vermelho.svg';
import { ReactComponent as AdvanceIcon } from '../../assets/icons/advance.svg';

import {
  Container,
  Content,
  LoginContainer,
  Label,
  ForgotPasswordAndErrorContainer,
  ForgotPasswordContainer,
  Text,
  ErrorContainer,
} from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [error, setError] = useState('');

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),

          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        setError('Falha no login, verifique seu e-mail e/ou senha.');
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <Content>
        <Toaster position="top-right" reverseOrder={false} />

        <LoginContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              name="email"
              icon={UserIcon}
              iconError={UserErrorIcon}
            />

            <Label htmlFor="password">Senha:</Label>
            <Input
              id="password"
              name="password"
              type="password"
              icon={PasswordIcon}
              iconError={PasswordErrorIcon}
            />

            <ForgotPasswordAndErrorContainer>
              <ForgotPasswordContainer>
                <Link to="/create-account">
                  <Text>Criar Cadastro</Text>
                </Link>
              </ForgotPasswordContainer>
              <ErrorContainer>
                <Text>{error}</Text>
              </ErrorContainer>
            </ForgotPasswordAndErrorContainer>

            <Button type="submit">
              ENTRAR
              <AdvanceIcon />
            </Button>
          </Form>
        </LoginContainer>
      </Content>
    </Container>
  );
};
