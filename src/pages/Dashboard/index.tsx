import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="https://github.com/Neylanio/CSS3-Layouts">
          <img src="https://avatars3.githubusercontent.com/u/15330671?s=460&v=4"
          alt="Neylanio"
          />
          <div>
            <strong>CSS3-Layouts</strong>
            <p>Layouts using Grid layout and FlexBox</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="https://github.com/Neylanio/CSS3-Layouts">
          <img src="https://avatars3.githubusercontent.com/u/15330671?s=460&v=4"
          alt="Neylanio"
          />
          <div>
            <strong>CSS3-Layouts</strong>
            <p>Layouts using Grid layout and FlexBox</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="https://github.com/Neylanio/CSS3-Layouts">
          <img src="https://avatars3.githubusercontent.com/u/15330671?s=460&v=4"
          alt="Neylanio"
          />
          <div>
            <strong>CSS3-Layouts</strong>
            <p>Layouts using Grid layout and FlexBox</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
