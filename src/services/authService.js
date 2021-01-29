import { BASE_URL } from './constants';

const baseURL = `${BASE_URL}/auth`;

export const registerSvc = async (email, userName, password) => {
    const reqBody = {
        userName: userName,
        email: email
    }
    if(password)
        reqBody.password = password;

    try {
        const response = await fetch(`${baseURL}/register`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        });
        const data = await response.json();
        if(!response.ok)
            data.errorCode = response.status;
        return data;
    }
    catch(err) {
        throw err;
    }
}

export const loginSvc = async (email, password) => {
    const reqBody = {
        email: email
    }
    if(password)
        reqBody.password = password;
    try {
        const response = await fetch(`${baseURL}/login`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody)
        });
        const data = await response.json();
        if(!response.ok)
            data.errorCode = response.status;
        return data;
    }
    catch(err) {
        throw err;
    }
}