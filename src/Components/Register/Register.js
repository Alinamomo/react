import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, DatePicker} from "antd"

const Register = ({ setUser }) => {

  const navigate = useNavigate();
  const handleSubmit = async (formValues) => {


    const newUser = {
      email: formValues.login,
      password: formValues.password,
      passwordConfirm: formValues.passwordConfirm,
      fullname: formValues.fullname,
      date: formValues.date,
      experience: formValues.experience
    };

    const createUser = async () => {
      console.log(newUser);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      };

      const response = await fetch("/api/Account/Register", requestOptions);
      return await response.json().then(
        (data) => {
          console.log(data);

          if (response.ok) {
            setUser({ IsAuthenticated: true, userName: newUser.email, userRole: "user"});
            navigate("/Account");
          }
          
        },
        (error) => console.log(error)
      );
    };
    createUser();
  };

  return (
    <React.Fragment>

      <div className="PageHeader FancyText">
              Регистрация
      </div>
        <div className="FormWrapper">
            <Form
              className="FormClass"
              onFinish={handleSubmit}
              name="basic"     
              initialValues={{remember: true}}
              autoComplete="off">
                <Form.Item style={{marginTop:"40px"}}
                  className="FormItemClass FancyText"
                  label="UserName"
                  name="login"
                  rules={[{required: true, message: "Введите имя пользователя"}]}>
                  <Input/>
                </Form.Item>

                <Form.Item
                  className="FormItemClass FancyText"
                  label="FullName"
                  name="fullname"
                  rules={[{required: true, message: "Введите имя"}]}>
                  <Input/>
                </Form.Item>

            

                <Form.Item
                  className="FormItemClass FancyText"
                  label="BirthDate"
                  name="date"
                  rules={[{required: true, message: "Введите дату рождения"}]}>
                     <DatePicker/>
                </Form.Item>

                <Form.Item
                  className="FormItemClass FancyText"
                  label="Experience"
                  name="experience"
                  rules={[{required: true, message: "Введите имя"}]}>
                  <Input/>
                </Form.Item>

              

                <Form.Item
                  className="FormItemClass FancyText"
                  label="Пароль"
                  name="password"
                  rules={[{required: true, message: "Введите пароль"}]}>
                  <Input.Password/>
                </Form.Item>

                <Form.Item
                  className="FormItemClass FancyText"
                  label="Подтвердите пароль"
                  name="passwordConfirm"
                  rules={[{required: true, message: "Введите пароль"}]}>
                  <Input.Password/>
                </Form.Item>

                <div className="LowerButtons">
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button className="FormButton" htmlType="submit"> Зарегистрироваться </Button>
                </Form.Item>
                <Button className="FormButton RegistrationButton" onClick={() => navigate('/Login')}> Войти </Button>
              </div>
            </Form>

          </div>
    </React.Fragment>

    
  );
};

export default Register;
