import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

export const RedirectToHomePage = ({ children }: Props) => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        if (accessToken) {
            navigate('/');
        }
    }, [accessToken, navigate]);

    return <div>{children}</div>;
};
