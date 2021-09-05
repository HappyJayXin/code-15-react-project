import useSWR from 'swr';

import Loading from './Loading';
import Tours from './Tours';
import { Main, Title, Button } from './styled';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = 'https://course-api.com/react-tours-project';

export type TourProps = {
  [k in 'id' | 'name' | 'info' | 'image' | 'price']: string;
};

const App = () => {
  const { data, mutate } = useSWR<TourProps[]>(url, fetcher);

  const removeTour = (id: string) => {
    mutate((oldTours) => {
      const isTours = oldTours && oldTours.length;
      return isTours ? oldTours.filter((tour) => tour.id !== id) : [];
    }, false);
  };

  if (!data) {
    return (
      <Main>
        <Loading />
      </Main>
    );
  }

  if (data && data.length === 0) {
    return (
      <Main>
        <Title>
          <h2> No Tour left</h2>
        </Title>
        <Button onClick={() => mutate()}>Refresh</Button>
      </Main>
    );
  }

  return (
    <Main>
      <Tours tours={data} removeTour={removeTour} />
    </Main>
  );
};

export default App;
