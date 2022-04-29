//import React, {Component} from "react";
import React, {useState} from 'react';
//class PersonCard extends Component {
const PersonCard = ({nombre, apellido, colordecabello, edad}) => {

    const [numero, setNumero] = useState(edad); 
    const aumentaEdad = () => {
        setNumero(numero+1);
}



    
        return (
            

            <div>
                <h2>{apellido}, {nombre}</h2>
                <p>Edad: {numero}</p>
                <p>Color de Cabello: {colordecabello}</p>
                <button onClick={aumentaEdad} className="btn btn-primary">Aumenta</button>
            </div>
        )
    }


export default PersonCard;