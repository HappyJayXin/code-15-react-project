import Review from './Review';
import { Main, Container, Title, UnderLine } from './styled';

const Reviews = () => {
  return (
    <Main>
      <Container>
        <Title>
          <h2>our reviews</h2>
          <UnderLine />
        </Title>
				<Review />
      </Container>
    </Main>
  );
};

export default Reviews;
