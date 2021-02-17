import {
  CasesBoxContainer,
  IconContainer,
  InfoContainer,
  Title,
  Total,
} from './CasesBoxElements'
import numeral from 'numeral'

const CasesBox = ({
  title,
  children,
  bg,
  total,
  handleCases,
}) => {
  return (
    <CasesBoxContainer onClick={handleCases}>
      <IconContainer style={{ backgroundColor: bg }}>
        {children}
      </IconContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Total>{(numeral(total).format())}</Total>
      </InfoContainer>
    </CasesBoxContainer>
  )
}

export default CasesBox
