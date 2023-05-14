import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const Ranges = ({ ranges, setRanges }) => {
    
    useEffect(() => {
    const getRanges = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch("/api/ModelRanges", requestOptions)
    
    .then(response => response.json())
    .then(
    (data) => {
    console.log('Data:', data)
    setRanges(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getRanges()
    }, [setRanges])
 
    return (
        <React.Fragment>
         <label style={{fontFamily:"Cinzel",textAlign: 'center',color:'white', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)', display: 'block' }}>MODEL RANGES: </label>
         
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {ranges.map(({ id, name}) => (   
            
        <div className="ModelRanges" key={id} id={id} style={{ width: 'calc(33.33% - 10px)', margin: '5px' }}>
            <Link to={"/ModelRanges/"+ id }>
            <img src={require("../../Images/" + id + ".png")} style={{ width: '80%', height: '200px' }} />
            </Link>
        
        <div style={{ fontFamily:"Cinzel", marginLeft:'130px', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)' }}>{name}</div>
        </div>
        ))}
        </div>
        </React.Fragment>
        )
        }
        export default Ranges