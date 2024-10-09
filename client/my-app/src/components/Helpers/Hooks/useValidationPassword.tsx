import { useEffect, useState } from 'react'

export const useValidationPassword = () => {
    const [validationData, setValidationData] = useState({
        password: '',
        repeatPassword: '',
        error: ''
    })

    const changeRepeatPasswordHandler = (e) => {
        setValidationData({
            ...validationData,
            repeatPassword: e.target.value
        })
    }

    const changePasswordHandler = (e) => {
        setValidationData({
            ...validationData,
            password: e.target.value
        })
    }

    useEffect(() => {
        if (validationData.password && validationData.repeatPassword) {
            if (validationData.password !== validationData.repeatPassword) {
                setValidationData({
                    ...validationData,
                    error: 'Пароли не совпадают'
                })
            } else {
                setValidationData({
                    ...validationData,
                    error: ''
                })
            }
        }
    }, [validationData.password, validationData.repeatPassword])

    return {
        validationData,
        changePasswordHandler,
        changeRepeatPasswordHandler
    }
}
