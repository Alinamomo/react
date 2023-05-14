import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client"
import Index from "./index.css"
import Construction from './Components/Construction/Construction'
import ConstructionCreate from './Components/ConstructionCreate/ConstructionCreate'
import Layout from "./Components/Layout/Layout"
import LogIn from "./Components/LogIn/LogIn"
import LogOff from "./Components/LogOff/LogOff"
import Register from "./Components/Register/Register";
import ModelRanges from './Components/ModelRange/ModelRanges'
import AutoModel from "./Components/AutoModel/AutoModel";
import LandingPage from "./Components/LandingPage/LandingPage"
import Acces from "./Components/Accesouries/Accesouries";
import ModelRange from "./Components/ModelRange/ModelRange"
import Purches from "./Components/ClientPurch/ClientPurch";

const App = () => {
    const [constrs, setConstrs] = useState([])
    const [ranges, setRanges] = useState([])
    const [accesouries, setAcces] = useState([])
    const [purches, setPurch]= useState([])
    const addConstruction = (constr) => setConstrs([...constrs, constr])
    const removeConstrustion = (removeId) => setConstrs(constrs.filter(({ id }) => id
        !== removeId));
        const [user, setUser] = useState({ isAuthenticated: false, userName: "",userRole: "" })

        useEffect(() => {
          const getUser = async () => {
               return await fetch("api/account/isauthenticated")
              .then((response) => {
                response.status === 401 &&
                  setUser({ isAuthenticated: false, userName: "", userRole: "" })
                return response.json()
              })
              .then(
                (data) => {
                  if (
                    typeof data !== "undefined" &&
                    typeof data.userName !== "undefined"
                  ) {
                    setUser({ isAuthenticated: true, userName: data.userName, userRole: data.userRole})
                  }
                },
                (error) => {
                  console.log(error)
                }
              )
          }
          getUser()
        }, [setUser])
        return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout user={user} />}>
                  <Route index element={
                    <div>
                      <LandingPage></LandingPage>
                    </div>
                  } />
                  <Route
                    path="/ModelRanges/"
                    element={
                      <>
                      {
                      
                      <label style={{textAlign: 'center',color:'white', fontWeight: 'bold', fontSize: '20px', marginTop: '10px', color: 'var(--blue)', display: 'block' }}>Model Ranges: </label>
                        
                     }
                     <ModelRanges 
                     user={user}
                     ranges={ranges}
                     setRanges={setRanges} 
                     style={{color:'white'}}/>
                      </>
                    }
                  />
                  
                  <Route
                    path="/ModelRanges/:id"
                    element={<ModelRange></ModelRange>}
                  />
                  
                    <Route
                    path="/AutoModels/:id"
                    element={
                      <AutoModel user={user}>
                      </AutoModel>
                    }
                  />
                   <Route
                    path="/Construction"
                    element={
                      <>
                        <ConstructionCreate user={user} addConstruction={addConstruction} />
                        
                      </>
                    }
                  />
              
                        <Route
                        path="/Accesouries"
                        element={ 
                       
                      <Acces
                       user={user}
                       accesouries={accesouries}
                       setAcces={setAcces}
                       style={{color:'--blue'}}/>
                        
                        }
                         />
                          <Route
                    path="/Client"
                    element={<Purches>
                      
                    </Purches>}
                  />
                  <Route
                    path="/login"
                    element={<LogIn user={user} setUser={setUser} />}
                  />
                  <Route path="/logoff" element={<LogOff setUser={setUser} />} />
                  <Route path="/register" element={<Register setUser={setUser} />} />
                  <Route path="*" element={<h3>404</h3>} />
                </Route>
              </Routes>
            </BrowserRouter>
          )
        }
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
)