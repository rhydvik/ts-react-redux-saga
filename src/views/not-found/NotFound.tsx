import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/sign-in">Go back to Sign in</Link>
    </div>
  );
};

export default NotFound;
