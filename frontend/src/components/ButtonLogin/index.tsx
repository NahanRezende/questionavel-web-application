import React, { ButtonHTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Button, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ButtonLogin: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container>
      <Button type="submit" {...rest}>
        {loading ? (
          <div className="loader">
            <Loader type="Oval" color="#FFF" height={25} width={25} />
          </div>
        ) : (
          children
        )}
      </Button>
    </Container>
  );
};

export default ButtonLogin;
