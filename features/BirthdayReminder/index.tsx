import { useState } from 'react';
import { Main, Container } from './styled';
import { GlobalStyle } from '../../components/GlobalStyle';

import List from './List';
import data from './data';

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);

  return (
    <Main>
      <GlobalStyle bg="var(--clr-pink)" />
      <Container>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </Container>
    </Main>
  );
};

export default BirthdayReminder;
