import styled from 'styled-components'

import CardDefault from '../UI/Card'

const Wrapper = styled(CardDefault)`
  padding: 0;

  width: 34.37rem;
  flex-direction: row;

  overflow: hidden;

  @media (max-width: 1124px) {
    width: auto;
    flex-direction: column;
  }
`

export default Wrapper
