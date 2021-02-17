import LineGraph from '../linegraph'
import Countries from '../countries'
import { Container } from './CasesElements'

const Cases = () => {
  return (
    <Container>
      <Countries />
      <LineGraph />
    </Container>
  )
}

export default Cases
