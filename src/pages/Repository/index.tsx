import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <h1>Repository</h1>
      <Link to="/">Voltar</Link>
      <ul>
        <li>{params.repository}</li>
      </ul>
    </>
  );
}

export default Repository;
