import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, ErrorMessage } from './styles';
import Repository from '../Repository';

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo) {
      return setInputError('Digite o autor/nome do repositório');
    }

    try {

      const response = await api.get(`repos/${newRepo}`);

      const repository = repositories.find(repo => repo.full_name == newRepo);

      if(!repository) {
        setRepositories([...repositories, response.data]);
        setNewRepo('');
        setInputError('');
      }else{
        setInputError('Repositório já adicionado!!');
      }

    } catch {
      setInputError('Repositório não encontrado!!');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form hasError={ !!inputError } onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite [Autor]/[Nome do repositório]"
          />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <ErrorMessage>{inputError}</ErrorMessage> }

      <Repositories>
        {
          repositories.map(repository => (
            <a target="_blank" href={repository.html_url} key={repository.full_name}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={50} />
            </a>
          ))
        }
      </Repositories>
    </>
  );
}

export default Dashboard;
