import React from "react"
import { Outlet, Link } from "react-router-dom"
import { Layout as LayoutAntd, Menu } from "antd"
import Style from './Style.css'
import logo from '../../Images/logo.png';
import insta from '../../Images/insta.png';
import twitter from '../../Images/twitter.png';
import youtube from '../../Images/youtube.png';
import tiktok from '../../Images/tik-tok.png';
//import LandPage from "./Components/LandPage/LandPage";
<link href="https://fonts.google.com/specimen/Cinzel" rel="stylesheet"></link>
const { Header, Content, Footer } = LayoutAntd
const menuStyles = {
  backgroundColor: 'black',
  '& .ant-menu-item-selected': {
    backgroundColor: 'grey'
  }

}
const items1 = [
  
  {
    label: <Link to={"/"} style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>MAIN</Link>,
    key: "1",
  },
  {
    label: <Link to={"/ModelRanges"} style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>MODELS</Link>,
    key: "2",
  },
  {
    label: <Link to={"/Accesouries"}style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>ACCESOURIES</Link>,
    key: "3",
  },
  {
    label: <Link to={"/login"}style={{ width: "100px",marginRight: "125px",fontFamily:"Cinzel", fontSize:"15px" }}>SING IN</Link>,
    key: "4",
  },
  {
    label: <Link to={"/logoff"}style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>EXIT</Link>,
    key: "5",
  },
  {
    label: <Link to={"/register"}style={{ width: "100px", marginRight: "120px", fontFamily:"Cinzel", fontSize:"15px" }}>SIGN UP</Link>,
    key: "6",
  },
]
const items2 = [
  
  {
    label: <Link to={"/"} style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>MAIN</Link>,
    key: "1",
  },
  {
    label: <Link to={"/ModelRanges"} style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>MODELS</Link>,
    key: "2",
  },
  {
    label: <Link to={"/Accesouries"}style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>ACCESOURIES</Link>,
    key: "3",
  },
 
  {
    label: <Link to={"/Client"}style={{ width: "100px", marginRight: "120px", fontFamily:"Cinzel", fontSize:"15px" }}>PURCHASES</Link>,
    key: "4",
  },
  
  {
    label: <Link to={"/logoff"}style={{ width: "100px", marginRight: "125px", fontFamily:"Cinzel", fontSize:"15px" }}>EXIT</Link>,
    key: "5",
  }
]
const logoStyles = {
    margin: 'auto',
    width: '100px',
    height: 'auto',
    display: 'flex',
  justifycontent: 'center', 
  
}
const Layout = ({ user }) => {
  return (
    
    <LayoutAntd>
      <Header  style={{ position: "sticky", top: 0, zIndex: 1, width: "100%",backgroundColor: 'black', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={logoStyles} />
     
        <div
          style={{
            float: "right",
            color: "rgba(255, 255, 255, 0.9)",
            backgroundColor:"rgba(0, 0, 0, 1)"
            
          }}
        >
          
          
        {user.isAuthenticated ? (
          <label style={{fontFamily:"Cinzel", fontSize:"15px", width:"20px"}}>USER: {user.userName} {user.userRole}</label>
        ) : (
          <label style={{fontFamily:"Cinzel", fontSize:"15px", width:"20px"}} >USER: GUEST</label>
        )}
      </div>

      {user.isAuthenticated ? (
         <Menu  mode="horizontal" items={items2} className="menu" >  
         </Menu>
        ) : (
          <Menu  mode="horizontal" items={items1} className="menu" >  
        </Menu>
        )}
      
       
        </Header>
      <Content className="site-layout" style={{ padding: "0 50px", backgroundColor: "rgba(0, 0, 0, 1)" }}>

        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor:"white", color:"black" }}>
      <Link to="https://www.instagram.com/audirussia/" >
      <img src={insta} alt="insta" style={{height:"100px", width:"100px", marginRight: "110px"}} />
    </Link>
    <Link to="https://twitter.com/AudiOfficial">
      <img src={twitter} alt="twitter" style={{height:"100px", width:"100px", marginRight: "100px"}} />
    </Link>
    <Link to="https://www.youtube.com/@Audi">
      <img src={youtube} alt="youtube" style={{height:"110px", width:"120px", marginLeft: "100px"}} />
    </Link>
    <Link to="https://www.tiktok.com/@audirussia?_t=8bscaxlrTuM&_r=1">
      <img src={tiktok} alt="tiktok" style={{height:"100px", width:"100px", marginLeft: "110px"}} />
    </Link>
    <div>
    AUDI ©2023
    </div>
        
        </Footer>
    </LayoutAntd>
  )
}

export default Layout
