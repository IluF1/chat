import { Button } from '@/components/Ui/Button'
import { Input } from '@/components/Ui/Input'
import { Text } from '@/components/Ui/Text'

import styles from './Auth.module.css'

const Auth = () => (
    <div className={styles.container}>
        <div className={styles.form_block}>
            <Text tag="h1">Войдите ваш аккаунт</Text>
            <form className={styles.form}>
                <Input placeholder="Введите ваш логин" />
                <Input
                    placeholder="Введите ваш пароль"
                    className={styles.password_input}
                />
                <Button className={styles.button}>Войти</Button>
                <a href='/registration'>
                    <Button className={styles.registration_button}>
                        Зарегистроваться
                    </Button>
                </a>
            </form>
        </div>
    </div>
)
export default Auth
