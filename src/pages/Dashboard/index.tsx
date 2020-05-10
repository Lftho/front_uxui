import React, { useState, useEffect } from 'react';
import { FiFileText } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import Logo from '../../assets/projeto01.png';
// import teste from '../../assets/htmlcss.svg';

import api from '../../services/api';

import { Container, Content, Profile, Repositories, ContentInfo } from './styles';

interface UserRepositorio {
  login: string;
  avatar_url: string;
  name: string;
  followers: string;
  following: string;
  location: string;
}

interface ReposRepositotrios {
  id: string;
  full_name: string;
  language: string; //linguagem - tipo typescript
  homepage: string; //site
  description: string;
  html_url: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<UserRepositorio | null>(null);
  const [repos, setRepos] = useState<ReposRepositotrios[]>([]);


  useEffect(() => {
      api.get(`Lftho`).then(response => {
      setUsers(response.data)
    // console.log(response.data)
    });

    //https://api.github.com/users/Lftho/repos
     api.get(`Lftho/repos`).then(response => {
       setRepos(response.data)
       console.log(response.data)
    });
  }, []);



  return(
    <>
      <Container>
        {/* <img className="teste" src={teste} alt="imagem-teste"/> */}
        {/* Container do header */}
        {users && (
          <Content>
            <nav>
              <img src={users.avatar_url} alt={users.login}/>
              <Link to="/dashboard">{users.name}</Link>
            </nav>

            <aside>
              <Profile>
                <ul>
                  <li>
                    <span>Localização</span>
                    <strong>{users.location}</strong>
                  </li>
                  <li>
                    <span>Seguidores</span>
                    <strong>{users.followers}</strong>
                  </li>
                  <li>
                    <span>Seguidor</span>
                    <strong>{users.following}</strong>
                  </li>
                </ul>
              </Profile>
            </aside>
          </Content>
        )}

        {repos.map(repo => (
          <Repositories>
              <a key={repo.id} href={repo.html_url}>
                <img src={Logo} alt="avatar"/>
                  <div>
                    <strong>{repo.full_name}</strong>
                    <p>
                      <strong>Descrição:</strong>
                      {repo.description}
                    </p>
                    <p>Linguagem: {repo.language}</p>
                  </div>
                <FiFileText size={20} />
              </a>
          </Repositories>
        ))}
      </Container>
    </>
  );
};

export default Dashboard;
