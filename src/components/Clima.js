import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    const {main, name} =resultado;

    if(!name) return null;

    //Grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>
                <span className="alts">Minima de:</span> {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span className="alts">&#x2103;</span>
                </p>
                <p>
                <span className="alts">Maxima de:</span> {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span className="alts">&#x2103;</span>
                </p>
                <p>
                <span className="alts">Sensación T. de:</span> {parseFloat(main.feels_like - kelvin, 10).toFixed(2)} <span className="alts">&#x2103;</span>
                </p>
                <p>
                    <span className="alts">Humedad del:</span> {main.humidity} <span className="alts">%</span>
                </p>
                <p>
                    <span className="alts">Presion de:</span> {main.pressure} <span className="alts">hPa</span>
                </p>
                
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;