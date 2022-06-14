import React, { useEffect, useState } from 'react';
import { Container, InsideContainer } from './styles';
import api from '../../services/api';

interface ISurvey {
  accountId: string;
  question: string;
  answers: {
    answer: string;
  }[];
  didAnswer: boolean;
}

export const ListSurveys: React.FunctionComponent = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>();

  useEffect(() => {
    api
      .get('/surveys')
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <InsideContainer>
        {surveys.map(s => (
          <h1>{s.question}</h1>
        ))}
      </InsideContainer>
    </Container>
  );
};
