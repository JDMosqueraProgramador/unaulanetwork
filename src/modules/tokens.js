export const setToken = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("auth-user", user);
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const getUser = () => {
    return localStorage.getItem("auth-user");
}

export const destructToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth-user");
    window.location.reload();
}

export const getConfig = () => {
    const config = {
        headers: {
            'auth-token': getToken()
        }
    }

    return config;
}