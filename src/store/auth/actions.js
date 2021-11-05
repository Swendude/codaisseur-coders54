import axios from "axios"

// kelley@codaisseur.com abcd

const API_URL = "https://codaisseur-coders-network.herokuapp.com"

const tokenReceived = (token) => ({
    type: "AUTH/tokenReceived",
    payload: token
})

const meReceived = (me) => ({
    type: "AUTH/meReceived",
    payload: me
})

export const checkTokenOnRefresh = async (dispatch, getState) => {
    const localToken = localStorage.getItem('token');
    
    if (!localToken) return
    
    dispatch(tokenReceived(localToken));    
    
    const meResponse = await axios.get(`${API_URL}/me`, {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    })
    dispatch(meReceived(meResponse.data));
}

export const login = (email_, password_) => {
    return async (dispatch, getState) => {
        try {
        const response = await axios.post(`${API_URL}/login`, {
            email: email_,
            password: password_
        })
        const token = response.data.jwt;
        dispatch(tokenReceived(token));

        localStorage.setItem('token', token)
        
        const meResponse = await axios.get(`${API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(meReceived(meResponse.data));

        }
        catch (e) {
            console.log('Something went wrong', e.message);
        }
    }
 
}



