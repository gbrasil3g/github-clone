import React from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>

        <RepoIcon />

        <Link className={'username'} to={'/gbrasil3g'}>
          gbrasil3g
          </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/gbrasil3g/nlwProffy'}>
          nlwProffy
          </Link>

      </Breadcrumb>

      <p>Site desenvolvido na NLW#2 pela Rocketseat</p>

      <Stats>
        <li>
          <StarIcon />
          <b>1</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon>
            <b>0</b>
            <span>forks</span>
          </ForkIcon>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/gbrasil3g/nlwProffy'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>

    </Container>
  );
}

export default Repo;