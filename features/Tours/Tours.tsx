import Tour from './Tour';
import { Title, UnderLine } from './styled';
import type { TourProps } from './index';

type Props = {
  tours: TourProps[];
  removeTour: (id: string) => void;
};

const Tours = ({ tours, removeTour }: Props) => {
  return (
    <section>
      <Title>
        <h2>Our Tours</h2>
        <UnderLine />
      </Title>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
