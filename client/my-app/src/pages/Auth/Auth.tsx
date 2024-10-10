import { FormEvent, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '@/components/Helpers/Hooks'
import { Button, Input, Text } from '@/components/Ui'

import styles from './Auth.module.css'
import { authApi } from './model/api.slice'

const Auth = () => {
    const [data, setData] = useState({
        login: '',
        password: ''
    })
    const dispatch = useAppDispatch()
    const error = useAppSelector((state) => state.auth.error)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(
            authApi({
                login: data.login,
                password: data.password
            })
        )
    }

    if (error) {
        toast(error)
    }

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className={styles.container}>
                <div className={styles.form_block}>
                    <Text tag="h1">Войдите ваш аккаунт</Text>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <Input
                            placeholder="Введите ваш логин"
                            value={data.login}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    login: e.target.value
                                })
                            }
                        />
                        <Input
                            placeholder="Введите ваш пароль"
                            className={styles.password_input}
                            value={data.password}
                            type="password"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    password: e.target.value
                                })
                            }
                        />
                        <Button className={styles.button} type="submit">
                            Войти
                        </Button>
                        <a href="/registration">
                            <Button className={styles.registration_button}>
                                Нету аккаунта?
                            </Button>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Auth
