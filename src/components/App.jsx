import React, { useState } from 'react';

import { Container } from 'components/Container/Container.styled';
import { WidgetWrap } from 'components/FeedbackOptions/FeedbackOptionst.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbad] = useState(0);

  const options = [good, neutral, bad];

  const handleMakeStat = event => {
    if (event.target.name === 'good') {
      setGood(state => state + 1);
    }
    if (event.target.name === 'neutral') {
      setNeutral(state => state + 1);
    }
    if (event.target.name === 'bad') {
      setbad(state => state + 1);
    }
  };

  const total = good + neutral + bad;

  const positiveFeedbackPercentage = Math.floor((good * 100) / total);

  return (
    <Container>
      <WidgetWrap>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={(good, neutral, bad)}
            onLeaveFeedback={handleMakeStat}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </WidgetWrap>
    </Container>
  );
};
