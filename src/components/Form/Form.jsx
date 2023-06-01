import React, {useContext, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BiUserCircle} from 'react-icons/bi';
import {FaUserCircle} from 'react-icons/fa';
import {AiOutlinePhone, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask'
import boy from '../../assets/formRight.png';
import { useLocation } from "react-router-dom";
import {CustomContext} from '../../config/context/context'

const Form = () => {
    const location = useLocation();

    const [passwordView, setPasswordView] = useState(false);
    const {registerUser, loginUser} = useContext(CustomContext);
    const password = useRef();
    const {
        register,
        handleSubmit,
        formState: {
        errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    });
    password.current = watch("password", "");
    const submitForm = (data) => {
let {confirmPwd, ...user} = data;
        if (location.pathname ==='/login'){
            loginUser(user)
        }else {
            registerUser(user)
        }
        console.log(user)
    };
    return (
        <div className="form">
            <div className="form__left">
                <p className="form__logo">Your logo</p>
                <form noValidate className='form__content' onSubmit={handleSubmit(submitForm)}>
                   <h2 className='form__content-title'>

                       {
                           location.pathname === '/login' ? 'Sign up' : 'Sign in'
                       }


                   </h2>
                    <p className='form__content-text'>
                        {
                            location.pathname === '/login' ? 'If you dont have an account register' : 'If you already have account'
                        }
                        <br/>


                        You can {
                            location.pathname === '/login' ? <Link to='/register'> Register here!</Link> : <Link to='/login'> Login here!</Link>
                        }

                    </p>

                    <label className='form__label'>
                        <span className='form__label-text'>Email</span>
                        <div className='form__label-field'>
                            <span className='form__label-icon'>
                                <MdOutlineMailOutline/>
                            </span>
                            <input {... register('email', {
                                required: {
                                    message: 'Email обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    message: 'Минимум 10 символа',
                                    value: 10
                                },
                                pattern: {
                                    message: 'Напишите правильно свой email',
                                    value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                }
                            })} placeholder='Enter your email address' className='form__label-input' type="email"/>
                        </div>
                        <p className='register__label-error'>
                            {errors.email && errors.email?.message}
                        </p>
                    </label>
                    {
                        location.pathname === '/register' && <label className='form__label'>
                            <span className='form__label-text'>Name</span>
                            <div className='form__label-field'>
                            <span className='form__label-icon'>
                                <BiUserCircle/>
                            </span>
                                <input {... register('name', {
                                    required: {
                                        message: 'Имя обязательно к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        message: 'Минимум 2 символа',
                                        value: 2
                                    },
                                    pattern: {
                                        message: 'Напишите правильно своё имя',
                                        value:  /^[а-яА-ЯёЁa-zA-Z]+$/
                                    }
                                })} placeholder='Enter your name address' className='form__label-input' type="text"/>
                            </div>
                            <p className='register__label-error'>
                                {errors.name && errors.name?.message}
                            </p>
                        </label>
                    }
                    {
                        location.pathname === '/register' && <label className='form__label'>
                            <span className='form__label-text'>Surname</span>
                            <div className='form__label-field'>
                            <span className='form__label-icon'>
                                <FaUserCircle/>
                            </span>
                                <input {... register('surname', {
                                    required: {
                                        message: 'Фамилия обязательно к заполнению',
                                        value: true
                                    },
                                    minLength: {
                                        message: 'Минимум 2 символа',
                                        value: 2
                                    },
                                    pattern: {
                                        message: 'Напишите правильно свою фамилию',
                                        value:  /^[а-яА-ЯёЁa-zA-Z]+$/
                                    }
                                })} placeholder='Enter your surname' className='form__label-input' type="text"/>
                            </div>
                            <p className='register__label-error'>
                                {errors.surname && errors.surname?.message}
                            </p>
                        </label>
                    }
                    {
                        location.pathname === '/register' && <label className='form__label'>
                            <span className='form__label-text'>Phone</span>
                            <div className='form__label-field'>
                            <span className='form__label-icon'>
                                <AiOutlinePhone/>
                            </span>
                                <InputMask mask={`+\\9\\96(999)99-99-99`} {... register('phone', {
                                    required: {
                                        value: true,
                                        message: 'Это поле обязательное'
                                    },
                                    pattern: {
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                        message: 'Заполните номер телефона'
                                    }
                                })} placeholder='Enter your phone number' className='form__label-input' type="tel"/>
                            </div>
                            <p className='register__label-error'>
                                {errors.phone && errors.phone?.message}
                            </p>
                        </label>
                    }

                    <label className='form__label'>
                        <span className='form__label-text'>Password</span>
                        <div className='form__label-field'>
                            <span className='form__label-icon' onClick={() => setPasswordView(prev => !prev)}>
                                {
                                    passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                }
                            </span>
                            <input {... register('password', {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                    message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                }
                            })} placeholder='Enter your password' className='form__label-input' type={passwordView ? 'text' : 'password'}/>
                        </div>
                        <p className='register__label-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </label>
                    {
                        location.pathname === '/register' &&   <label className='form__label'>
                            <span className='form__label-text'>Confirm password</span>
                            <div className='form__label-field'>
                                {/*<span className='form__label-icon' onClick={() => setPasswordView(prev => !prev)}>*/}
                                {/*    {*/}
                                {/*        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>*/}
                                {/*    }*/}
                                {/*</span>*/}
                                <input {... register('confirmPwd', {
                                    validate: value =>
                                        value === password.current || "The password do not match"
                                })} placeholder='Enter your password again' className='form__label-input' type={passwordView ? 'text' : 'password'}/>
                            </div>
                            <p className='register__label-error'>
                                {errors.confirmPwd && errors.confirmPwd?.message}
                            </p>
                        </label>
                    }

                    <button type='submit' className="form__btn">Login</button>
                </form>
            </div>

            <div className="form__right">
                <img src={boy} alt="" className="form__right-img"/>
                <div className="form__column">
                    <h2 className="form__column-title">Sign Up to name</h2>
                    <p className="form__column-text">Lorem Ipsum is simply </p>
                </div>
            </div>
        </div>
    );
};

export default Form;