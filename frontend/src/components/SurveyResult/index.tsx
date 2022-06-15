import React, { useCallback, useEffect, useState } from 'react';
import { TbTrashX } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import { Container, Results, Result, TitleContainer } from './styles';
import api from '../../services/api';

type Answer = {
  answer: string;
};

type Survey = {
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

type Props = {
  survey: Survey;
};

type Results = {
  question: string;
  answers: {
    id: string;
    answer: string;
    surveyId: string;
    count: number;
    percent: number;
    isCurrentAccountAnswered: boolean;
  }[];
};

const SurveyResult = ({ survey }: Props): JSX.Element => {
  const [results, setResults] = useState<Results>();

  const history = useHistory();

  useEffect(() => {
    api
      .get(`surveys/${survey.id}/results`)
      .then(response => {
        setResults(response.data);
      })
      .catch(e => console.error(e));
  }, [survey.id]);

  const handleDelete = useCallback(async () => {
    await api.delete(`surveys/${survey.id}`);

    history.push('/dashboard');
  }, [history, survey.id]);

  return (
    <Container>
      <TitleContainer>
        <h2>{survey.question}</h2>
        <button type="button" onClick={handleDelete}>
          <TbTrashX color="red" />
        </button>
      </TitleContainer>
      <Results>
        {results &&
          results.answers.map(r => (
            <Result>
              <div>
                <strong>{r.answer}</strong>
                <p>{r.count} resposta(s)</p>
                <p>{(r.percent * 100).toFixed(2)}%</p>
              </div>
            </Result>
          ))}
      </Results>
    </Container>
  );
};

export default SurveyResult;
