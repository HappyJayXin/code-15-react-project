import { useState } from 'react';
import type { TourProps } from './index';
import { Article, Footer, Info, Price, DeleteButton, Button } from './styled';

type Props = TourProps & {
  removeTour: (id: string) => void;
};

const Tour = ({ id, name, info, image, price, removeTour }: Props) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Article>
      <img src={image} alt={name} />
      <Footer>
        <Info>
          <h4>{name}</h4>
          <Price>{price}</Price>
        </Info>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <Button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </Button>
        </p>
        <DeleteButton onClick={() => removeTour(id)}>沒興趣</DeleteButton>
      </Footer>
    </Article>
  );
};

export default Tour;
