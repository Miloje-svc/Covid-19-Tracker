import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

const SidebarContainer = styled.section`
min-width:70px;
height:100vh;
background-color: #222529;
display: flex;
align-items:center;
flex-direction:column;
padding:  2rem 0;
`

const SidebarLogoContainer = styled.div`
display:grid;
place-items:center;
width:45px;
height:45px;
border-radius:0.5rem;
cursor:pointer;
background-color:#282B2E;
box-shadow: 0 0 20px rgba(0,0,0, 0.5);
`

const SidebarLogo = styled.div`
font-size:1.5rem;
`

const SidebarOptions = styled.section`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
color:#565659;
`

const SidebarOption = styled.div`
  width:100%;
  height:70px;
  display:grid;
  place-items:center;
  cursor: pointer;

  &:hover {
    background-color: #282B2E;
  }
`

const SidebarProfile = styled(Avatar)`
cursor: pointer;
`

export {
  SidebarContainer,
  SidebarLogoContainer,
  SidebarLogo,
  SidebarOptions,
  SidebarOption,
  SidebarProfile
}