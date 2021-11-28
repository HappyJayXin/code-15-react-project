import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Article, Button } from './styled';

type Props = {
  title: string;
  info: string;
}

const Question = ({ title, info }: Props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Article>
      <header>
        <h4>{title}</h4>
        <Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </header>
      {showInfo && (
        <p>{info}</p> 
      )}
    </Article>
  );
}

export default Question;