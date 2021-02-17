import styled from 'styled-components'

const CasesBoxContainer = styled.div`
width:100%;
max-width:200px;
display:flex;
align-items:center;
margin-right:1rem;
cursor:pointer;
`

const IconContainer = styled.div`
display:grid;
place-items:center;
width:50px;
height:50px;
border-radius:0.5rem;
color:white;
`

const InfoContainer = styled.div`
margin-left: 1rem;
`

const Title = styled.p`
margin-bottom:0.5rem !important;
font-size:0.8rem;
color: #A1A5B1;
`

const Total = styled.p`
color: white;
font-weight: 500;
font-size:1.2rem;
`

export {
  CasesBoxContainer,
  IconContainer,
  InfoContainer,
  Title,
  Total,
}