import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const SecondPage: React.FC<Props> = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Link to="/">Return to home</Link>
    </div>
  );
};

export default SecondPage;
