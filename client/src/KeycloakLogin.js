import React, {Component} from 'react'
import Keycloak from "keycloak-js"

const Config = {
    url: 'http://libellosnas:8088/auth', 
    realm: 'web-clients', 
    clientId: 'react-client', 
    onLoad: 'login-required'
}

class KeycloakLogin extends Component {

    componentDidMount() {
        const keycloak = Keycloak(Config);
        keycloak.init({onLoad: "login-required", promiseType: 'native'}).then(authentication => {
            console.log(authentication);
        });
    }

    render() {
    
        return <div>Ready to initialize</div>
    }

}

export default KeycloakLogin