import styled from 'styled-components'

const CountriesContainer = styled.section`
width:100%;
height:100%;
flex:0.75;
overflow-y:scroll;
`

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom:1rem;
`

const CountriesSearch = styled.input`
  outline:none;
  border:1px solid #4D4F52;
  color: #FFFFFF;
  padding:0.5rem 1rem;
  background-color:#333639;
  width:100%;
  border-radius:0.5rem
`

const ButtonsContainer = styled.section`
  width:100%;
  display:flex;
  margin:1rem 0;
  overflow:hidden;
  border-radius:0.5rem;
    border:1px solid #4D4F52;
`

const Button = styled.button`
flex:1;
width:100%;
padding:1rem 0;
cursor:pointer;
outline:none;
background-color:#333639;
color:white;
border:none;
border-bottom:2px solid transparent;
`

const List = styled.section`
height: 100%;
overflow-y:scroll;
`

const ListItem = styled.section`
width:100%;
display:flex;
justify-content:space-between;
padding: 0.55rem 0;
`

const ListInfo = styled.div`
  display:flex;
  align-items: center;
`

const CountryFlag = styled.img`
width:30px;
height:30px;
border-radius:50%;
`

const CountryName = styled.h4`
color:#4A4E55;
margin-left:0.5rem;
font-size:0.9rem;
`

const CountryCases = styled.p`
color:white;
font-size:1rem;
font-weight:500;
`

export {
  CountriesContainer,
  Title,
  CountriesSearch,
  CountryFlag,
  ButtonsContainer,
  Button,
  List,
  ListInfo,
  ListItem,
  CountryName,
  CountryCases
}