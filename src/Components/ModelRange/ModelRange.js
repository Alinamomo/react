import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Range = () => {
    const [models, setModels] = useState([])
    const {id}  = useParams();
    useEffect(() => {
    const getModels = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch(`/api/ModelRanges/${id}`, requestOptions)
    
    .then(response => response.json())  
    .then(
    (data) => {
    console.log('Data:', data)
    setModels(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getModels()
    }, [setModels])
    return (
        <React.Fragment>
         <label style={{fontFamily:"Cinzel",textAlign: 'center',color:'white', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)', display: 'block' }}>MODEL RANGES: </label>
         
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {models.map(({ id, name}) => (   
            
        <div className="ModelRange" key={id} id={id} style={{ width: 'calc(33.33% - 10px)', margin: '5px' }}>
            <Link to={"/AutoModels/"+ id }> <img src={require("../../Images/" + name + ".jpg")} style={{ width: '80%', height: '200px' }} /> </Link>
           
           
        
        <div style={{ fontFamily:"Cinzel", marginLeft:'130px', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)' }}>{name}</div>
        </div>
        ))}
        </div>
        </React.Fragment>
      
        )
    }


export default Range