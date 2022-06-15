import React, { useEffect, useState } from 'react';
import { BiLeftArrowAlt, GrReturn } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import { Container, InsideContainer, Counter } from './styles';
import api from '../../services/api';
import SurveyResult from '../../components/SurveyResult';
import { ReturnButton } from '../../components/ReturnButton';
import { useAuth } from '../../hooks/auth';

type Answer = {
  answer: string;
};

type SurveyType = {
  id: string;
  accountId: string;
  surveyResults: {
    answer: string;
    accountId: string;
  }[];
  question: string;
  answers: Answer[];
  didAnswer: boolean;
};

export const YourSurveys = (): JSX.Element => {
  const [surveys, setSurveys] = useState<SurveyType[]>();

  const history = useHistory();

  const { accountId } = useAuth();

  const handleReturn = () => {
    history.push('/dashboard');
  };

  useEffect(() => {
    api
      .get('/surveys')
      .then(response => {
        setSurveys(
          (response.data as SurveyType[]).filter(
            s => s.accountId === accountId,
          ),
        );
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Counter>
        <ReturnButton type="button" onClick={handleReturn}>
          <BiLeftArrowAlt color="#f7feff" />
        </ReturnButton>
        <h1>Seus Surveys: {surveys ? surveys.length : 0}</h1>
      </Counter>
      {surveys ? (
        <InsideContainer>
          {surveys && surveys.map(s => <SurveyResult survey={s} />)}
        </InsideContainer>
      ) : (
        <InsideContainer>
          <p>Não há surveys ainda</p>
        </InsideContainer>
      )}
    </Container>
  );
};
