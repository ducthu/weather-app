export const userService = {
    login,
    logout
}

function login({ username, password }: { username: string; password: string; }) {
    console.log("login");
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`https://reqres.in/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('token', JSON.stringify(user.token));
            return user;
        });
}

function logout() {
    localStorage.removeItem('token');
}

function handleResponse(response: Response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}