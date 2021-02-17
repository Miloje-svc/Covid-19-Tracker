/* eslint-disable no-unused-vars */
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet"
import { MapWrapper, CasesContainer, Title } from './MapElements.js'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CasesBox from '../casesBox'
import numeral from 'numeral'
import "leaflet/dist/leaflet.css"
import MapMarker from '../mapmarker'

const token = "pk.eyJ1IjoibWlsb2plc3ZpY2V2aWMiLCJhIjoiY2trcHIxNXZhMWZseDJvbnN2amxmcjA1ZSJ9.rph7orGP-jQW2qYB_5wU5g"

const Map = () => {
  const [data, setData] = useState([])
  const [casesType, setCasesType] = useState('cases')
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries")
    const data = await response.json()

    setCountries(data)
  }

  const getData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all")
    const data = await response.json()

    setData(data)
  }

  useEffect(() => {
    getCountries()
    getData()
  }, [])

  const handleCases = (e) => {
    // setCasesType(e.target.value)
    console.log(e.target.value)
  }

  return (
    <MapWrapper>
      <Title>Coronavirus COVID-19</Title>
      <CasesContainer>
        <CasesBox
          handleCases={handleCases}
          title="Active"
          bg="#F0C377"
          total={data.active}>
          <FontAwesomeIcon icon='virus' />
        </CasesBox>
        <CasesBox
          handleCases={handleCases}
          title="Recovered"
          bg="#60C2AE"
          total={data.recovered}>
          <FontAwesomeIcon icon='plus' />
        </CasesBox>
        <CasesBox
          handleCases={handleCases}
          title="Deaths"
          bg="#BA3232"
          total={data.deaths}>
          <FontAwesomeIcon icon='skull' />
        </CasesBox>
      </CasesContainer>
      <MapContainer
        style={{ height: "750px" }}
        center={{ lat: 34.80746, lng: -40.4796 }} zoom={3.5}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/milojesvicevic/ckkpqym1k15hp17pg09usr180/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
          attribution={`©<a href='https://www.mapbox.com/about/maps/'>Mapbox</a>©<a href='http://www.openstreetmap.orgcopyright'>OpenStreetMap</a><strong><a href='https://www.mapbox.com/map-feedback/'target='_blank'>Improve this map</a></strong>`} />
        {countries.map((country, index) => {
          return (
            <MapMarker
              key={index}
              country={country}
              casesType={casesType}
            />
          )
        })}
      </MapContainer>
    </MapWrapper>
  )
}

export default Map
