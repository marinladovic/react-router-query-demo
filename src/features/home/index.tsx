import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/second-page">Go to second page</Link>
    </div>
  );
};

export default Home;
