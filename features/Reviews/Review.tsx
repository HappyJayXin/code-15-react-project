import { useState } from 'react';
import {
  Article,
  ImgContainer,
  QuoteIcon,
  Author,
  Job,
  Info,
  Button,
  RandomButton,
} from './styled';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];
	const PeopleLength = people.length;

	const nextNumber = (num: number): number => (num + 1) % PeopleLength;

	const prevNumber = (num: number): number => (num + PeopleLength - 1) % PeopleLength;

  const getPerson = (action: 'next' | 'prev') => {
    if (action === 'next') {
      setIndex((prevState) => nextNumber(prevState));
    } else if (action === 'prev') {
      setIndex((prevState) => prevNumber(prevState));
    }
  };

	const getRandomPerson = () => {
		const randomNumber = Math.floor(Math.random() * PeopleLength);
		setIndex(randomNumber === index ? nextNumber(randomNumber) : randomNumber);
	}

  return (
    <Article>
      <ImgContainer>
        <img src={image} alt={name} />
        <QuoteIcon>
          <FaQuoteRight />
        </QuoteIcon>
      </ImgContainer>

      <Author>{name}</Author>
      <Job>{job}</Job>
      <Info>{text}</Info>

      <div>
        <Button onClick={() => getPerson('prev')}>
          <FaChevronLeft />
        </Button>
        <Button onClick={() => getPerson('next')}>
          <FaChevronRight />
        </Button>
      </div>
      <RandomButton onClick={getRandomPerson}>suprise me</RandomButton>
    </Article>
  );
};

export default Review;
