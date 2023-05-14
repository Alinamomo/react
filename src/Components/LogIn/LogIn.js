import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Checkbox, Form, Input } from "antd"

const LogIn = ({ user, setUser }) => {
  const [errorMessages, setErrorMessages] = useState([])
  const navigate = useNavigate()

  const logIn = async (formValues) => {
    console.log("Success:", formValues);


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formValues.username,
        password: formValues.password,
        rememberme: formValues.remember,
      }),
    }
    return await fetch("api/account/login", requestOptions)
      .then((response) => {
        // console.log(response.status)
        response.status === 200 &&
          setUser({ isAuthenticated: true, userName: "", userRole: ""})
        return response.json()
      })
      .then(
        (data) => {
          console.log("Data:", data)
          if (
            typeof data !== "undefined" &&
            typeof data.userName !== "undefined"
          ) {
            setUser({ isAuthenticated: true, userName: data.userName, userRole: data.userRole  })
            navigate("/")
          }
          typeof data !== "undefined" &&
            typeof data.error !== "undefined" &&
            setErrorMessages(data.error)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const renderErrorMessage = () =>
    errorMessages.map((error, index) => <div key={index}>{error}</div>)

  return (
    <>
      {user.isAuthenticated ? (
        <h3>Пользователь {user.userName} успешно вошел в систему</h3>
      ) : (
        <>
        <div align="center"> 
        <h3 style={{fontSize:22, marginTop:'50px', color:"var(--blue)", fontFamily:"Cinzel",}}>SING IN</h3>

<Form
  onFinish={logIn}
  name="basic"
  labelCol={{ span: 5 }}
  wrapperCol={{ span: 15 }}
  style={{ maxWidth: 1000 }}
  initialValues={{ remember: false }}
  onFinishFailed={renderErrorMessage}
  autoComplete="off"
  
>
  <Form.Item
    label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Username</label>}
    name="username"
    rules={[
      { required: true, message: "Введите имя пользователя!" },
    ]}
  >
    <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
  </Form.Item>

  <Form.Item
    label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Password</label>}
    name="password"
    
    rules={[
      { required: true, message: "Введите пароль!" },
    ]}
  >
    <Input.Password style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)"  }} />
  </Form.Item>

  <Form.Item
    name="remember"
    valuePropName="checked"
    wrapperCol={{ offset: 8, span: 16 }}
  >
    <Checkbox style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 20, marginRight:"300px" }}>Remember me</Checkbox>
    {renderErrorMessage()}
  </Form.Item>
  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    <Button style={{backgroundColor:"var(--blue)", marginRight:"300px"}} type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
        </div>
          
        </>
      )}
    </>
  )
}

export default LogIn
