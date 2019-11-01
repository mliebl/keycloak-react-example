import React, {Component} from 'react'
import Keycloak from "keycloak-js";

class KeycloakLogin extends Component {

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
    }

    render() {
        return <div>Ready to initialize</div>
    }

}

export default KeycloakLogin