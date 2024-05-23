import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function useCsrfToken() {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/set-csrf-token/', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            const token = Cookies.get('csrftoken');
            if (token) {
                setCsrfToken(token);
            } else {
                console.warn('CSRF token is not available in cookies');
            }
        })
        .catch(error => {
            console.error('Error fetching CSRF token:', error);
        });
    }, []);

    return csrfToken;
}

export default useCsrfToken;
