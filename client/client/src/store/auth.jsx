import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [services, setServices] = useState([]);
    const authorizationToken=`Bearer ${token}`;
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    const isLoggedIn = !!token;

    const logoutUser = () => {
        setToken(null);
        localStorage.removeItem("token");
        setUser(null);
    };

    const userAuthentication = async () => {
        if (!token) return;

        try {
            const response = await fetch("http://localhost:3000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                console.error("Failed to fetch user data:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/data/service", {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                setServices(data.msg);
            } else {
                console.error("Failed to fetch services:", response.statusText);
            }
        } catch (error) {
            console.error(`Services frontend error: ${error}`);
        }
    };

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider
         value={{
             isLoggedIn,
              storeTokenInLS,
               logoutUser,
                user, 
                services,
        authorizationToken
        }}
         >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
