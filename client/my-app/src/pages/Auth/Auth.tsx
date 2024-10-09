import { useState } from 'react'

import { useAppDispatch } from '@/components/Helpers/Hooks/useAppDispatch'
import { Button } from '@/components/Ui/Button'
import { Input } from '@/components/Ui/Input'
import { Text } from '@/components/Ui/Text'

import styles from './Auth.module.css'
import { authApi } from './model/api.slice'

const Auth = () => {
    const [data, setData] = useState({
        login: '',
        password: ''
    })
    const dispatch = useAppDispatch()

    const handleSubmit = () => {
        dispatch(
            authApi({
                login: data.login,
                password: data.password
            })
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_block}>
                <Text tag="h1">Войдите ваш аккаунт</Text>
                <form className={styles.form}>
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
                    <Button
                        className={styles.button}
                        type="button"
                        onClick={() => handleSubmit()}
                    >
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
    )
}
export default Auth
