import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

// OBS: arrumar a autenticação de 
// login, salvamento do token para dar refrash na pagina 
// sem perder os dados.

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | any>(null);

    const api = useApi();

    const setToken = async(token: string) => {
        localStorage.setItem('authToken', '');
    }

    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken');
        if (storageData) {
            const data = await api.validateToken(storageData);
            if (data.user) {
                setUser(data.user);
            }
        }
    }
    
    //useEffect
    useEffect(() => {
        validateToken();
    }, [api]);

    //login do usuario
    const signin = async (email: any, password: any) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            // localStorage.setItem('authToken', data.token);
            // setToken(data.token);
            return true;
        }
        return false;
    }

    //deslogar usuario
    const signout = async () => {
        setUser(undefined);
        setToken('');
        await api.logout();
    }

    //main
    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}