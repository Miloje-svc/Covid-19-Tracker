import styled from 'styled-components'

const Container = styled.section`
width:400px;
height:100vh;
padding:2rem;
background-color:#222529;
display:flex;
flex-direction:column;

 @media (max-width: 1100px) {
  display: none !important;
  }
`

export {
  Container,
}