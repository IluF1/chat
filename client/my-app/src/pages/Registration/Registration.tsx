import { useState } from 'react'

import { useAppDispatch } from '@/components/Helpers/Hooks/useAppDispatch'
import { Button } from '@/components/Ui/Button'
import { Input } from '@/components/Ui/Input'
import { Text } from '@/components/Ui/Text'

import { registrationApi } from './model/api.slice'
import styles from './Registration.module.css'

const Registration = () => {
    const dispatch = useAppDispatch()

    const [data, setData] = useState({
        name: '',
        login: '',
        password: ''
    })
    const registration = () => {
        dispatch(
            registrationApi({
                name: data.name,
                login: data.login,
                password: data.password
            })
        )
    }
    return (
        <div className={styles.container}>
            <div className={styles.form_block}>
                <Text tag="h1">Зарегистрируйтесь</Text>
                <form className={styles.form} >
                    <Input
                        placeholder="Введите ваш логин"
                        value={data.login}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                login: e.target.value
                            }))
                        }
                    />
                    <Input
                        placeholder="Ваше имя"
                        className={styles.password_input}
                        value={data.name}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                name: e.target.value
                            }))
                        }
                    />
                    <Input
                        placeholder="Введите ваш пароль"
                        className={styles.password_input}
                        value={data.password}
                        onChange={(e) =>
                            setData((prev) => ({
                                ...prev,
                                password: e.target.value
                            }))
                        }
                    />
                    <Button className={styles.button} type="button" onClick={() => registration()}>
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
