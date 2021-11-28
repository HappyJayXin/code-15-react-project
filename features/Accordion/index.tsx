import SingleQuestion  from './Question';
import data from './data';
import { Main, Container } from './styled';

const Accordion = () => (
  <Main>
    <Container>
      <h3>Question and answers about login</h3>
      <section>
        {data.map(question => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </Container>
  </Main>
);

export default Accordion;