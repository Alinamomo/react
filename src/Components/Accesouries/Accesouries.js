import React, { useEffect } from 'react'
import { Descriptions } from 'antd'
import {Collapse, Divider, Row, Col} from "antd"
const { Panel } = Collapse;
const Acces = ({ accesouries, setAcces }) => {
    useEffect(() => {
    const getAcces = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch("/api/Accesouries", requestOptions)
    
    .then(response => response.json())
    .then(
    (data) => {
    console.log('Data:', data)
    setAcces(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getAcces()
    }, [setAcces])
 
    return (
        <React.Fragment>
         <label style={{fontFamily:"Cinzel",textAlign: 'center',color:'white', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)', display: 'block' }}>ACCESOURIES: </label>
         
        <div style={{ flexWrap: 'wrap' }}>
        {accesouries.map(({ id, name}) => (   
        <div className="Accesouries" key={id} id={id}>
            <Divider orientation="left"></Divider>
                  <Collapse>
                 
                    <Panel header={<div style={{ color: 'var(--blue)', fontFamily: 'Cinzela', fontSize: 25 }}>{name}</div>}>
                        
                    <img src={require("../../Images/" +"acc"+ id + ".png")} style={{ width: '100%', height: '500px' }} />
                    
                    </Panel>
                    
                    </Collapse>
               
                
        {/* <img src={require("../../Images/" +"acc"+ id + ".png")} style={{ width: '80%', height: '200px' }} />
        <div style={{ fontFamily:"Cinzel", marginLeft:'130px', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)' }}>{name}</div> */}
        </div>
        ))}
        </div>
        

       
        </React.Fragment>
        )
        }
        export default Acces