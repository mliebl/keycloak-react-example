import React, { Component } from 'react'
import Keycloak from "keycloak-js"
import decode from 'jwt-decode'
import JSONPretty from 'react-json-pretty'

const Config = {
    url: 'http://libellosnas:8088/auth',
    realm: 'web-clients',
    clientId: 'react-client',
    onLoad: 'login-required'
}

class KeycloakLogin extends Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };
    }

    componentDidMount() {
        const keycloak = Keycloak(Config);
        keycloak.init({ onLoad: "login-required", promiseType: 'native' }).then(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated })
        });
    }

    render() {
        if (this.state.keycloak && this.state.authenticated) {
            var jwt = JSON.stringify(decode(this.state.keycloak.token));
            return <JSONPretty id="json-pretty" data={jwt}></JSONPretty>
        } else {
            return <div>Ready to initialize</div>
        }
    }

}

export default KeycloakLogin