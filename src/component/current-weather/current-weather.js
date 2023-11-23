import "./current-weather.css"

const Currentweather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <p className="city">{data.city}</p>
                <p className="weather-decription">{data.weather[0].description}</p>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temprature">{Math.round(data.main.temp)}°c</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">winds</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">pressure</span>
                        <span className="parameter-value">{data.main.pressure}hpa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Currentweather;