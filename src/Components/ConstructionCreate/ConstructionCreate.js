import React from 'react'
import { useNavigate } from "react-router-dom";
const { createRoot } = "react-router-dom";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const ConstructionCreate = ({ user, addConstruction }) => {
  const navigate = useNavigate();
  const handleSubmit = async (formValues) => {

    console.log(formValues)

    const constrDto = {
      Name: formValues.nameConstr,
      HorsePower: formValues.horsePowerConstr,
      Transmission: formValues.transmissionConstr,
      EngineCapaity: formValues.engineCapaityConstr,
      Drive: formValues.driveConstr,
      EngineType: formValues.engineTypeConstr,
      InStock: formValues.inStockConstr,
      id_model: formValues.idModelConstr,
      id_colour: formValues.idColourConstr
    }
    const createConstruction = async () => {
      const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(constrDto)
      }
      const response = await fetch(`api/Construction/`,

        requestOptions)

      return await response.json()
        .then((data) => {
          console.log(data)
          if (response.ok) {
            addConstruction(data)
            navigate('/');
          }
        },
          (error) => console.log(error)
        )
    }
    createConstruction()
  }
  return (
    <React.Fragment>
      {user.isAuthenticated && user.userRole == "admin" ? (
        <>
          <h3>Добавление новой Комплектации</h3>
          <Form onFinish={handleSubmit}>

            <Form.Item required={true}
              name="nameConstr"
            label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Name of Construction</label>}
              value="input">

              <Input required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />

            </Form.Item>

            <Form.Item required={true}
            name="horsePowerConstr"
            label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Horse Power</label>}
              value="InputNumber">

              <InputNumber required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item  required={true} name="transmissionConstr" label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Transmission</label>}
              value="input">

              <Input required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item required={true} name="engineCapaityConstr" label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Engine Capacity</label>}
              value="InputNumber">

              <InputNumber required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item required={true} name="driveConstr" label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Drive</label>}
              value="input">

              <Input required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item required={true}  name="engineTypeConstr" label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Engine Type</label>}
              value="input">

              <Input required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item required={true} name="inStockConstr" label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Количество в наличии</label>}
              value="InputNumber">

              <InputNumber required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item required={true} name="idColourConstr" label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Id color     </label>}
              value="InputNumber">

              <InputNumber required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item required={true} name="idModelConstr"label={<label style={{ color: "var(--blue)", fontFamily: "Cinzela", fontSize: 25 }}>Id model</label>}
              value="InputNumber">

              <InputNumber required style={{ height: '40px', width: '500px', fontSize: '20px', backgroundColor: "var(--blue)" }} />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button style={{ backgroundColor: "var(--blue)", marginRight: "300px" }} type="primary" htmlType="submit">
                Создать
              </Button>
            </Form.Item>

           
          </Form>
        </>
      ) : ("")}
    </React.Fragment >
  )
}
export default ConstructionCreate