import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 2rem 1.87rem;

  flex: 1;

  display: flex;
  gap: 1.25rem;

  @media (max-width: 1124px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1.25rem;
    justify-content: start;
  }

  @media (max-width: 399px) {
    padding: 0 0.75rem 0.62rem;
  }
`
