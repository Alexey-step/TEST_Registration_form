import React, {useState} from "react";
import "./form.css";

const Form = () => {
    const [nameValue, setNameValue] = useState(``)
    const [emailValue, setEmailValue] = useState(``)
    const [phoneValue, setPhoneValue] = useState(``)

    const onNameInputHandler = (evt) => {
        setNameValue(evt.target.value)
    }
    const onEmailInputHandler = (evt) => {
        setEmailValue(evt.target.value)
    }
    const onPhoneInputHandler = (evt) => {
        setPhoneValue(evt.target.value)
    }

    const submitHandler = (evt) => {
        evt.preventDefault()
    }

    return (
        <div className="wrapper">
            <h1 className="checkin__title">Регистрация</h1>
            <div className="checkin">
                <p className="checkin__text">Уже есть аккаунт?</p>
                <a className="checkin__link" href="/">Войти</a>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <label htmlFor="name">Имя</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Валентин Петров"
                    value={nameValue}
                    onChange={onNameInputHandler}
                />
                <label htmlFor="mail">Email</label>
                <input 
                    type="email" 
                    id="mail"
                    placeholder="mailmail.email"
                    value={emailValue}
                    onChange={onEmailInputHandler}
                />
                <label htmlFor="phone">Номер телефона</label>
                <input 
                    type="tel" 
                    id="phone"
                    placeholder="+71894442211"
                    value={phoneValue}
                    onChange={onPhoneInputHandler}
                />
                <label htmlFor="lang">Язык</label>
                <input 
                    type="text" 
                    id="lang"
                    placeholder="Английский"
                />
                <div className="checkbox-wrapper">
                    <input className="checkbox" type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkbox__label"></label>
                    <p>Принимаю <a href="/">условия</a> использования</p>
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Form;