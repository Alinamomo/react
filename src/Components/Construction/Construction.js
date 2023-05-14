import React, { useEffect } from 'react'
//import Construction from '../ConstructionCreate/ConstructionCreate'
import './Style.css'
const Construct = ({ user, constrs, setConstrs, removeConstruction }) => {
    useEffect(() => {
    const getConstrs = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch("api/Construction", requestOptions)
    
    .then(response => response.json())
    .then(
    (data) => {
    console.log('Data:', data)
    setConstrs(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getConstrs()
    }, [setConstrs])

   
    return (
        <React.Fragment>
      
        </React.Fragment>
        )
        }
        export default Construct