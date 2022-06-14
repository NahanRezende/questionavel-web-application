import React, { useCallback, useEffect, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Container, Results, Result, TitleContainer } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

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

const Survey = ({ survey }: Props): JSX.Element => {
  const [results, setResults] = useState<Results>();
  const [answered, setAnswered] = useState<boolean>(survey.didAnswer);

  const { accountId } = useAuth();
  const history = useHistory();

  const handleDelete = useCallback(async () => {
    await api.delete(`surveys/${survey.id}`);

    history.push('/dashboard');
  }, [history, survey.id]);

  useEffect(() => {
    api
      .get(`surveys/${survey.id}/results`)
      .then(response => {
        setResults(response.data);
      })
      .catch(e => console.error(e));
  }, [survey.id]);

  const handleAnswer = useCallback(
    async (a: Answer) => {
      await api.put(`/surveys/${survey.id}/results`, { answer: a.answer });
      setAnswered(true);
      window.location.reload();
    },
    [survey.id],
  );

  const handleEdit = () => {
    setAnswered(false);
  };

  function getDefaultValue(): string {
    if (!survey || survey.surveyResults) {
      return '';
    }

    const target = survey.surveyResults.find(sr => sr.accountId === accountId);

    if (target) {
      return target.answer;
    }

    return '';
  }

  return (
    <Container>
      <TitleContainer>
        <h1>{survey.question}</h1>
        <div>
          {accountId === survey.accountId && (
            <button type="button" onClick={handleDelete}>
              deletar
            </button>
          )}
          {answered && (
            <button type="button" onClick={handleEdit}>
              editar
            </button>
          )}
        </div>
      </TitleContainer>
      {answered ? (
        <Results>
          {results &&
            results.answers.map(r => (
              <Result>
                <div>
                  <strong>{r.answer}</strong>
                  <p>{r.count} resposta(s)</p>
                  <p>{r.percent * 100}%</p>
                </div>
              </Result>
            ))}
        </Results>
      ) : (
        survey.answers.map(a => (
          <RadioGroup
            onChange={() => handleAnswer(a)}
            defaultValue={getDefaultValue()}
          >
            <FormControlLabel
              key={a.answer}
              control={<Radio color="primary" />}
              label={a.answer}
              value={a.answer}
            />
          </RadioGroup>
        ))
      )}
    </Container>
  );
};

export default Survey;
