import { AsyncStorage } from 'react-native';
/**Envia una peticion de registro para un usuario, el servidor responde enviando 
 * un token, el cual es almacenado en el AsyncStorage
 */
export var login = (email, password) => {
    let URL = 'http://127.0.0.1:3000/auth/login';
    fetch(URL, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }) 
    .then((response) => response.json())
    .then((responseJson) => {
        if(!responseJson.mensaje){
            let token = JSON.stringify(responseJson.token);
            try {
                AsyncStorage.setItem(email, token);
            }catch (error) {
                console.log(error);
            }
        }else {
            alert(responseJson.mensaje);
        }
       

    })
    .catch((error) => {
        alert(`Error: ${error}`)
    })
}
export var logout = (email) => {
    try{
        AsyncStorage.removeItem(email);
        console.log('Todos los datos del storage han sido borrados.')
    } catch (error) {
        console.log(error);
    }
}

export var registro = (nombreCompleto, email, password) => {
    let URL = 'http://127.0.0.1:3000/auth/registro';
    fetch(URL, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombreCompleto: nombreCompleto,
            email: email,
            password: password
        })
        
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(`Respuesta: ${JSON.stringify(responseJson)}`);
    })
    .catch((error) => {
        alert(`Error: ${error}`)
    })
}

/**Obtiene el toquen de un usuario alamacenado en el AsyncStorage */
export var obtenerToken = (emailUsuario) => {
    try {
        let token = AsyncStorage.getItem(emailUsuario);
        if(token !== null){
           // console.log(token)
            return token;
        }
    }catch (error){
        console.log(error);
    }
}