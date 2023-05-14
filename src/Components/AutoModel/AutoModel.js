import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Collapse, Divider, Button, Space, Modal, Form, InputNumber, Select } from "antd"
import {Input} from "antd"
import { Carousel } from "antd";
import './/Style.css'
import { CaretRightOutlined } from '@ant-design/icons';
import Construction from '../Construction/Construction'
import ConstructionCreate from '../ConstructionCreate/ConstructionCreate'
import { Link } from 'react-router-dom';
const { Panel } = Collapse;


const CustomExpandIcon = (props) => {
  return (
    <CaretRightOutlined style={{ color: 'var(--blue)' }} rotate={props.isActive ? 90 : 0} />
  );
};


const Model = ({ user }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderModalOpen, setOrderIsModalOpen] = useState(false);
  const [constrs, setConstrs] = useState([])

  const [clients, setClients] = useState([])

  const { id } = useParams();
  const addConstruction = (constr) => setConstrs([...constrs, constr])

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const closeOrderModal = () => {
    setOrderIsModalOpen(false);
  }


  const removeConstruction = async ({ id }) => {
    const requestOptions = {
      method: "DELETE"
    }
    return await fetch(`/api/Construction/${id}`,
      requestOptions)

      .then((response) => {
        if (response.ok) {
          navigate('/');
        }
      },
        (error) => console.log(error)
      )
  }

  const changeStock = (formValues) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        formValues.stockField
      )
    };


    return fetch(`/api/Construction/${id}/ChangeStock`,
      requestOptions)
      .then((response) => {
        if (response.ok) {
          setIsModalOpen(false);
          navigate('/');
        }
      },
        (error) => console.log(error)
      )
  }

  useEffect(() => {
    const getConstrs = async () => {
      const requestOptions = {
        method: "GET"
      }
      return await fetch(`/api/AutoModels/${id}`, requestOptions)

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
    getConstrs();
  }, [setConstrs])

  useEffect(() => {
    const getClients = async () => {
      const requestOptions = {
        method: "GET"
      }
      return await fetch("/api/Client/", requestOptions)

        .then(response => response.json())
        .then(
          (data) => {
            console.log('Clients:', data)
            setClients(data)
          },
          (error) => {
            console.log(error)
          }
        )
    }
    getClients();
  }, [setClients])


  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <React.Fragment>
      <label style={{ fontFamily: "Cinzel", textAlign: 'center', color: 'white', fontWeight: 'lighter', fontSize: '30px', marginTop: '40px', color: 'var(--blue)', display: 'block' }}>Construction: </label>

      <div className='font-mont-script'>
        {constrs.map(({ id, name, horsePower, transmission, engineCapacity, drive, engineType, inStock, color_name, price }) => (
          <div className='description'>
            <Divider orientation="left"></Divider>
            <Collapse expandIconPosition="left" expandIcon={({ isActive }) => <CustomExpandIcon isActive={isActive} />}>
              <Panel header={<div style={{ color: 'var(--blue)', fontFamily: 'Cinzela', fontSize: 25 }}>{name}</div>}
                extra={
                  <Space className="site-button-ghost-wrapper" wrap>

                    {
                      user.userRole == "admin" ?
                        (
                          <>
                            <Button type="primary" danger ghost onClick={() => removeConstruction({ id })}>
                              Delete
                            </Button>
                            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                              Изменить число в НАЛИЧИИ
                            </Button>
                            <Button type="primary" onClick={() => setOrderIsModalOpen(true)}>
                              Оформить заказ
                            </Button>
                            <Modal open={isModalOpen} destroyOnClose={true} okText={"Закрыть"} cancelText={"Закрыть другого цвета"} onOk={closeModal} onCancel={closeModal}>
                              <Form
                                className="FormClass"
                                onFinish={changeStock}
                                name="basic"
                                autoComplete="off"
                              >
                                <Form.Item
                                  label="Новое количество"
                                  name="stockField"

                                  rules={[
                                    { required: true, message: "Введите новое значение" }
                                  ]}
                                >
                                  <InputNumber />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                  <Button className="FormButton" htmlType="submit"> Ввести </Button>
                                </Form.Item>
                              </Form>
                            </Modal>

                            <Modal open={isOrderModalOpen} destroyOnClose={true} okText={"Ок"} cancelText={"Закрыть"} onOk={closeOrderModal} onCancel={closeOrderModal} width={900}>
                              <Form
                                className="FormClass"
                                onFinish={changeStock}
                                name="order"
                                autoComplete="off"
                              >
                               <Form.Item
                              label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>ФИО</label>}
                              name="fullName"
                              width="10"
                              rules={[
                                { required: true, message: "Введите ФИО!" },
                              ]}
                            >
                              <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
                            </Form.Item>

                            <Form.Item
                              label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Водительское удостоверение</label>}
                              name="driverLicense"
                              wrapperCol={{ span: 12 }}
                              labelCol={{ span: 8 }}
                              rules={[
                                { required: true, message: "Введите №ВУ!" },
                              ]}
                            >
                              <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
                            </Form.Item>

                            <Form.Item
                              label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Паспорт</label>}
                              name="pasport"
                              wrapperCol={{ span: 12 }}
                              rules={[
                                { required: true, message: "Введите №паспорта!" },
                              ]}
                            >
                              <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
                            </Form.Item>

                            <Form.Item
                              label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Дата покупки</label>}
                              name="date"
                              wrapperCol={{ span: 12 }}
                              rules={[
                                { required: true, message: "Введите дату покупки!" },
                              ]}
                            >
                              <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
                            </Form.Item>

                            <Form.Item
                              label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Конечная стоимость</label>}
                              name="totalAmount"
                              wrapperCol={{ span: 12 }}
                              rules={[
                                { required: true, message: "Конечную стоимость!" },
                              ]}
                            >
                              <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
                            </Form.Item>

                            <Form.Item
                              label={<label style={{ color: "var(--blue)", fontFamily:"Cinzela", fontSize: 25 }}>Название заказа</label>}
                              name="nameModel"
                              wrapperCol={{ span: 12 }}
                              rules={[
                                { required: true, message: "Заказ: " },
                              ]}
                            >
                              <Input  style={{ height: '40px', width: '500px', fontSize: '20px',backgroundColor:"var(--blue)" }}/>
                            </Form.Item>


                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                  <Button className="FormButton" htmlType="submit"> Оформить </Button>
                                </Form.Item>
                              </Form>
                            </Modal></>) : ""}
                  </Space>
                }
              >
                <div>
                  <p>ЛС: {horsePower}</p>
                  <p>КПП: {transmission}</p>
                  <p>ОБЪЕМ ДВИГАТЕЛЯ: {engineCapacity}</p>
                  <p>ПРИВОД: {drive}</p>
                  <p>ТИП ДВИГАТЕЛЯ: {engineType}</p>
                  <p>В НАЛИЧИИ: {inStock} </p>
                  <p>ЦЕНА: {price}</p>
                  <p>ЦВЕТ: {color_name}</p>
                </div>

              </Panel>
            </Collapse>



          </div>


        ))}
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          {user.userRole == "admin" ? (
            <Link to={"/Construction"}>
              <button style={{width:"100%",height:"50px", backgroundColor:"var(--blue)", fontSize:"20pt"}}>Add Construction</button>
            </Link>
          ) : ("")
          }
        </Space>
      </div>
    </React.Fragment>

  )
}


export default Model