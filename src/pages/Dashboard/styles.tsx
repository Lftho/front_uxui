import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background: #ddd;
  padding: 0 40px;
`;

export const Content = styled.div`
  height: 70px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #c3c3c3;
    }

    a {
      font-weight: bold;
      color: #333;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.section`
  display: flex;
  margin-left: 5px;
  padding-right: 5px;

  ul {
    display: flex;
    list-style: none;


    li {
      & + li {
        /* hackezinho para dar espaço a partir do segundo */
        margin-left: 20px;
        padding-left: 15px;
        border-left: 1px solid #c3c3c3;
      }


      strong {
        display: block;
        font-size:18px;
        color: #3d3d3d;
        text-align: center;
      }

      span {
        display: block;
        font-size: 18px;
        font-weight: 900;
        /* margin-top: 4px; */
        color: #333;
      }
    }
  }
`;

export const ContentInfo = styled.section `

`;

export const Repositories = styled.div`
  display: flex;

  margin-top: 80px;
  max-width: 1080px;

  a {
    background: #fff;
    border-radius: 5px;
    width:100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transaform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 20px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #979896;
      }
    }
    svg {
      margin-left: auto;
      color: #3D3D4D;
    }
  }
`;

export default Container;
