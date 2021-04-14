import styled from 'styled-components';

const navWidth = 12.0;
const asideWidth = 29.0;

export const Container = styled.div`
  padding: 3.8rem ${asideWidth}rem 3rem ${navWidth}rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  > div {
    h1 {
      font-size: 1.8rem;
    }

    span {
      font-size: 0.8rem;
      font-weight: 400;
      strong {
        color: #6266f5;
      }
    }
  }

  div + div {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      text-decoration: none;
      color: #6266f4;
      margin-right: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Button = styled.button`
  border: 0;
  background: var(--shape);
  padding: 1rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  color: var(--white);
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;

export const Welcome = styled.div`
  margin-top: 1.5rem;
  padding: 1.3rem 1rem 1.3rem 3rem;
  background: var(--shape);
  border-radius: 1.5rem;

  display: flex;
  justify-content: space-between;

  div {
    h2 {
      font-size: 2.2.rem;
      font-weight: 400;
      line-height: 54px;
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;
      color: #e0e0e0;
    }
  }
`;

export const Reports = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
`;

interface ReportProps {
  color: string;
}

export const Report = styled.div<ReportProps>`
  background: #343965;
  width: 8.2rem;
  height: 12rem;
  border-radius: 1.2rem;
  margin-right: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    background: ${props => props.color};
    padding: 1rem 1.2rem;
    border-radius: 1.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    color: #b7b7b7;
    font-size: 1rem;
    font-weight: 300;
  }

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const NewReport = styled.div`
  background: #23274a;
  width: 8.2rem;
  height: 12rem;
  border-radius: 1.2rem;
  border: 3px dashed #6266f4;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background: transparent;
  }
`;

export const Chart = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 23rem;
  background: #343965;
  border-radius: 1.2rem;
`;
