import { Person } from './data';
import { Article } from './styled';

type Props = {
  people: Person[];
};

const List = ({ people }: Props) => (
  <>
    {people.map((person) => {
      const { id, name, age, image } = person;
      return (
        <Article key={id}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </Article>
      );
    })}
  </>
);

export default List;
