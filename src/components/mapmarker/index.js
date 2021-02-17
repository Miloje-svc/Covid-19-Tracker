import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'

const casesTypeColors = {
  cases: {
    hex: "#F6C879",
    multiplier: 200,
  },
  recovered: {
    hex: "#5CC1AC",
    multiplier: 400,
  },
  deaths: {
    hex: "#BA3131",
    multiplier: 1000,
  },
}

const MapMarker = ({ country, casesType }) => {
  return (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }>
      <Popup>
        <div className="info-container">
          <img src={country.countryInfo.flag} alt="" />
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  )
}

export default MapMarker
