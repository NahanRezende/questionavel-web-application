import React, { useCallback, useEffect, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Container, Results, Result } from './styles';
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

const Survey = ({ survey }: Props): JSX.Element => {
  const [results, setResults] = useState<Results>();

  useEffect(() => {
    api
      .get(`surveys/${survey.id}/results`)
      .then(response => {
        console.log(response.data);
        setResults(response.data);
      })
      .catch(e => console.error(e));
  }, [survey.id]);

  const handleAnswer = useCallback(
    async (a: Answer) => {
      await api.put(`/surveys/${survey.id}/results`, { answer: a.answer });
    },
    [survey.id],
  );

  return (
    <Container>
      <h1>{survey.question}</h1>
      {survey.didAnswer ? (
        <Results>
          {results &&
            results.answers.map(r => (
              <Result>
                <h2>{r.answer}</h2>
                <p>{r.count} resposta(s)</p>
                <p>{r.percent}%</p>
              </Result>
            ))}
        </Results>
      ) : (
        survey.answers.map(a => (
          <RadioGroup onChange={() => handleAnswer(a)}>
            <FormControlLabel
              key={a.answer}
              control={<Radio />}
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
