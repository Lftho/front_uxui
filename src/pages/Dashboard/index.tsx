import React, { useState, useEffect } from 'react';
import { FiFileText } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import Logo from '../../assets/projeto01.png';

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

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<UserRepositorio | null>(null);


  useEffect(() => {
    api.get(`Lftho`).then(response => {
      setUsers(response.data)
      console.log(response.data)
    });

    // api.get(`Lftho/repos`).then(response => {
    //   console.log(response.data)
    // });
  }, []);



  return(
    <>
      <Container>
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
        <Repositories>
          <ContentInfo>
            <a href="#">
              <img src={Logo} alt="avatar"/>
                <div>
                  <strong>Lftho/gofinances-react</strong>
                  <p>
                    <strong>Descrição:</strong>
                    O aplicativo é para uso de organização
                    a suas dispensa.
                  </p>
                  <p>Linguagem: Typescript</p>
                </div>
              <FiFileText size={20} />
            </a>
          </ContentInfo>
        </Repositories>
      </Container>
    </>
  );
};

export default Dashboard;
