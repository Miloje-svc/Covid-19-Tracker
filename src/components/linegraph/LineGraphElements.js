import styled from 'styled-components'

const Container = styled.section`
width:100%;
height:25%;
flex:0.25;
display:flex;
flex-direction:column;
`

const Title = styled.h1`
color: white;
font-size:1.2rem;
font-weight:bold;
padding-bottom:2rem;
`

const Content = styled.div`
margin-top:auto;
width:100%;

.chartjs-render-monitor {
max-height: 200px;
}
`

export {
  Container,
  Title,
  Content
}