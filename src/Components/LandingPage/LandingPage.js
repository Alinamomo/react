import React from "react"
import './Styles.css'
import { Outlet, Link } from "react-router-dom"
import { Layout as LayoutAntd, Menu } from "antd"
import { Image } from 'antd';
import main from '../../Images/main.jpg';


const LandingPage = ({user}) => {
    const styles ={
        backgroundImage: `url(${main})`,
        boxsizing: "border-box",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        height: '700px',
        width: '100%'          
    };
    return (
        <div style={styles}>
           {        
             <div style={{
                position: 'absolute',
                bottom: 440,
                left: 0,
                right: 0,
                textAlign: 'center',
                color: '#708090',
                backgroundColor: 'rgba(0,0,0,0.0)',
                padding: '20px',
              
              }}>
                <label style={{fontFamily:"Cinzel", fontSize:"45px"}}>VORSPRUNG DURCH TECHNIK</label>
              </div>
           }
        </div>
        
      );
}

  export default LandingPage