import React, { useEffect, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import { Container, InsideContainer } from './styles';
import api from '../../services/api';
import Survey from '../../components/Survey';
import { Counter } from '../YourSurveys/styles';
import { ReturnButton } from '../../components/ReturnButton';

interface ISurvey {
  id: string;
  accountId: string;
  question: string;
  surveyResults: {
    answer: string;
    accountId: string;
  }[];
  answers: {
    answer: string;
  }[];
  didAnswer: boolean;
}

export const ListSurveys: React.FunctionComponent = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>();

  const history = useHistory();

  useEffect(() => {
    api
      .get('/surveys')
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleReturn = () => {
    history.push('/dashboard');
  };

  return (
    <Container>
      <Counter>
        <ReturnButton type="button" onClick={handleReturn}>
          <BiLeftArrowAlt color="#f7feff" />
        </ReturnButton>
        <h1>Surveys: {surveys ? surveys.length : 0}</h1>
      </Counter>
      {surveys ? (
        <InsideContainer>
          {surveys && surveys.map(s => <Survey survey={s} key={s.id} />)}
        </InsideContainer>
      ) : (
        <InsideContainer>
          <p>Não há surveys ainda</p>
        </InsideContainer>
      )}
    </Container>
  );
};
