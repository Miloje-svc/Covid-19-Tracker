/* eslint-disable array-callback-return */
/* eslint-disable no-mixed-operators */
import { useEffect, useState } from 'react'
import numeral from 'numeral'
import {
  CountriesContainer,
  Title,
  CountriesSearch,
  List,
  ListItem,
  ListInfo,
  ButtonsContainer,
  Button,
  CountryFlag,
  CountryName,
  CountryCases,
} from './CountriesElements'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [cases, setCases] = useState("active")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries?sort=${cases}`)
      const data = await response.json()
      setCountries(data)
    }

    getCountries()
  }, [cases])

  const onClick = (e) => {
    setCases(e.target.value)
  }

  return (
    <CountriesContainer>
      <Title>Cases Info</Title>
      <CountriesSearch
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search countries" />
      <ButtonsContainer>
        <Button onClick={onClick} style={{ color: cases === 'active' && '#F0C377', borderColor: cases === 'active' && '#F0C377' }} value="active">Infected</Button>
        <Button onClick={onClick} style={{ color: cases === 'deaths' && '#F0C377', borderColor: cases === 'deaths' && '#F0C377' }} value="deaths">Deaths</Button>
        <Button onClick={onClick} style={{ color: cases === 'recovered' && '#F0C377', borderColor: cases === 'recovered' && '#F0C377' }} value="recovered">Recovered</Button>
      </ButtonsContainer>
      <List>
        {countries.filter(value => {
          if (search === '') {
            return value
          } else if (value.country.toLowerCase().includes(search.toLowerCase())) {
            return value
          }
        }).map((country, index) => (
          <ListItem key={index}>
            <ListInfo>
              <CountryFlag src={country.countryInfo.flag} />
              <CountryName>{country.country}</CountryName>
            </ListInfo>
            <CountryCases>
              {/* This works but make it look cleaner */}
              {cases === "active" && (numeral(country.active).format()) ||
                cases === "deaths" && (numeral(country.deaths).format()) ||
                cases === "recovered" && (numeral(country.recovered).format())}
            </CountryCases>
          </ListItem>
        ))}
      </List>
    </CountriesContainer>
  )
}

export default Countries
