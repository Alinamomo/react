import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd'
import {Collapse, Divider, Row, Col} from "antd"
const { Panel } = Collapse;

const Purches = () => {
    const [purches, setPurches] = useState([])
    useEffect(() => {
    const getPurch = async () => {
    const requestOptions = {
    method: "GET"
    }
    return await fetch("/api/Client", requestOptions)
    
    .then(response => response.json())
    .then(
    (data) => {
    console.log('Data:', data)
    setPurches(data)
    },
    (error) => {
    console.log(error)
    }
    )
    }
    getPurch()
    }, [setPurches])
 
    return (
        <React.Fragment npm >
         <label style={{fontFamily:"Cinzel",textAlign: 'center',color:'white', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)', display: 'block' }}>Clients: </label>
         
        <div>
        {purches.map(({ id, fullName, driverLicense, pasport, date, accessName, modelName}) => (   
        <div className="Purchases" key={id} id={id}>
                  <Descriptions style={{color: "white"}} layout="vertical" >
                 <div className='descript'> 
                  <Descriptions.Item >
                    <label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 28 }}>ФИО: {fullName}</label>
                    </Descriptions.Item>
               
                     <Descriptions.Item>
                    <label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 28 }}>№ВУ: {driverLicense}</label> 
                    </Descriptions.Item>
                    

                    <Descriptions.Item>
                   <label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 20 }}>Паспорт:  {pasport}</label> 
                    </Descriptions.Item>

                    <Descriptions.Item >
                   <label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 20 }}>Дата покупки:   {date}</label>
                    </Descriptions.Item>


                    <Descriptions.Item>
                   <label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 20 }}>Название доп. комплектующих:  {accessName}</label>
                    </Descriptions.Item>

                    <Descriptions.Item>
                  <label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 20 }}>Комплектация: {modelName} </label>
                    </Descriptions.Item>

                 </div>
                    
                    
                    </Descriptions>
               
                
        {/* <img src={require("../../Images/" +"acc"+ id + ".png")} style={{ width: '80%', height: '200px' }} />
        <div style={{ fontFamily:"Cinzel", marginLeft:'130px', fontWeight: 'lighter', fontSize: '20px', marginTop: '10px', color: 'var(--blue)' }}>{name}</div> */}
        </div>
        ))}
        </div>
        

       
        </React.Fragment>
        )
        }
        export default Purches