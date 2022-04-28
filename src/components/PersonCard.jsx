import React, {Component} from "react";

class PersonCard extends Component {

    render() {
        const {nombre, apellido, colordecabello, edad} = this.props;
        return (
            

            <div>
                <h2>{apellido}, {nombre}</h2>
                <p>Edad: {edad}</p>
                <p>Color de Cabello: {colordecabello}</p>
            </div>
        )
    }
}

export default PersonCard;