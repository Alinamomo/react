import React, { useEffect } from 'react'
//import Colors from '../ColorsCreate/ColorsCreate'
import './Style.css'
const Construct = ({ user, colors, setColors, removeColors }) => {
    useEffect(() => {
    const getColors = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch("api/Colors", requestOptions)
    
    .then(response => response.json())
    .then(
    (data) => {
    console.log('Data:', data)
    setColors(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getColors()
    }, [setColors])

    const deleteItem = async ({ id }) => {
        const requestOptions = {
        method: "DELETE"
        }
        return await fetch(`/api/Colors/${id}`,
        requestOptions)
        
        .then((response) => {
        if (response.ok) {
        removeColors(id);
        }
        },
        (error) => console.log(error)
        )
        }

    return (
        <React.Fragment>
        <h3>Комплектации: </h3>
        {colors.map(({ id, name, horsePower, transmission, engineCapacity, drive, engineType, inStock, id_model, id_colour }) => (
        <div className="Colors" key={id} id={id} >
        
        </div>
        ))}
        </React.Fragment>
        )
        }
        export default Construct