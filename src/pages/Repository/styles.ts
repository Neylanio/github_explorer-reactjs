import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6C6C80;
      }
    }
  }

  @media (max-width: 600px) {
    header {
      justify-content: center;

      img {
        width: 150px;
        height: 150px;
      }

      div{
        margin-top: 50px;

        strong {
          font-size: 26px;
        }

        p {
          font-size: 14px;
          color: #737380;
          margin-top: 4px;
        }
      }
    }
    ul {
      justify-content: center;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 60px;

  a{
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 14px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 10px;
    }

    div {
      margin-left: 30px;
      flex: 1;

      strong {
        font-size: 16px;
        color: #3D3D4D;
      }

      p {
        font-size: 14px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #CBCBD6;
    }
  }
`;
