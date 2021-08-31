import axios from 'axios';
import { unaulaApi, localApi } from '../modules/apisConfig';
import { setToken } from '../modules/tokens';

export const loginApi = async (body, postCatch) => {

    const userData = { 
        
    }

    axios.post(unaulaApi + '/auth/login', body, { headers: { 'Content-Type': 'application/json' } })
        .then(response => {

            console.log(response)

            if (response.status === 200) {

                setToken(response.headers['auth-token'], body.user);

                axios.get(`${localApi}/users/${body.user}`)
                    .then(response => {
                        if (response.status === 200) window.location.reload();
                    })
                    .catch(error => {
                        console.log(error.response)
                        if (error.response.status === 404) window.location.href = "http://localhost:3000/configuracion";
                    })

            }

        })
        .catch(error => {

            postCatch(error);

        });

}

