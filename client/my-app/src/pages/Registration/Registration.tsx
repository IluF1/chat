import { useState } from 'react'

import { useAppDispatch } from '@/components/Helpers/Hooks/useAppDispatch'
import { useAppSelector } from '@/components/Helpers/Hooks/useAppSelector'
import { Button, Input, Text } from '@/components/Ui'

import { useValidationPassword } from '../../components/Helpers/Hooks/useValidationPassword'
import { registrationApi } from './model/Slices/api.slice'
import styles from './Registration.module.css'

const Registration = () => {
    const dispatch = useAppDispatch()
    const {
        changePasswordHandler,
        changeRepeatPasswordHandler,
        validationData
    } = useValidationPassword()

    const error = useAppSelector(state => state.registration.error)

    const [data, setData] = useState({
        name: '',
        login: '',
        password: '',
        repeatPassword: ''
    })

    const registration = (e: React.FormEvent) => {
        e.preventDefault()
        if (!validationData.error) {
            dispatch(
                registrationApi({
                    name: data.name,
                    login: data.login,
                    password: data.password
                })
            )
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_block}>
                <Text tag="h1">Зарегистрируйтесь</Text>
                <form className={styles.form} onSubmit={registration}>
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
                        placeholder="Ваше имя"
                        className={styles.password_input}
                        value={data.name}
                        onChange={(e) =>
                            setData({
                                ...data,
                                name: e.target.value
                            })
                        }
                    />
                    <Input
                        placeholder="Введите ваш пароль"
                        className={styles.password_input}
                        value={data.password}
                        type="password"
                        onChange={(e) => {
                            setData({
                                ...data,
                                password: e.target.value
                            })
                            changePasswordHandler(e)
                        }}
                    />
                    <Input
                        placeholder="Введите ваш пароль еще раз"
                        className={styles.password_input}
                        value={data.repeatPassword}
                        type="password"
                        onChange={(e) => {
                            setData({
                                ...data,
                                repeatPassword: e.target.value
                            })
                            changeRepeatPasswordHandler(e)
                        }}
                    />
                    {validationData.error && (
                        <Text>{validationData.error}</Text>
                    )}
                    <Button
                        className={styles.button}
                        type="submit"
                        block={!!validationData.error}
                    >
                        Зарегистрироваться
                    </Button>
                    <a href="/auth">
                        <Button className={styles.auth_button} type="button">
                            У вас есть аккаунт?
                        </Button>
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Registration
