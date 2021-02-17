import styled from 'styled-components'

const MapWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  padding-bottom: 2rem !important;
  background-color: #282B2E;
  overflow: hidden !important;

.leaflet-pane {
height: 100%;
width: 100%;
}

.leaflet-control-zoom {
  display:none !important;
}

.leaflet-control-attribution {
  display:none !important;
}
`

const CasesContainer = styled.section`
display:flex;
align-items: center;
width: 100%;
margin: 2rem 0;
`

const Title = styled.h1`
color:white;
font-size:2rem;
font-weight:bold;
`

export {
  MapWrapper,
  CasesContainer,
  Title,
}