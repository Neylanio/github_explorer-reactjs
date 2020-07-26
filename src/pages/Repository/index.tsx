import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={20}/>
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/15330671?v=4" alt="Neylanio"/>
          <div>
            <strong>Neylanio/github_explorer-reactjs</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>184</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>34</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="" >
          <div>
            <strong>Nome do Repositório</strong>
            <p>descricao</p>
          </div>

          <FiChevronRight size={50} />
        </Link>
      </Issues>
    </>
  );
}

export default Repository;
