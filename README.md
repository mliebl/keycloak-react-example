## React-App with Keycloak
This App shows the communication between React and Keycloak

## Prerequirements
* docker installed
* node & npm installed

## Starting Keycloak
The root directory contains a docker-compose file, which starts a keycloak instance and a corresponding postgres database.  
`docker-compose up -d`

## Starting the app
Try starting the app with 
`npm start`

## App Flow
If you've configured Keycloak the right way, this app will redirect you to the Keycloak login page. After the login keycloak will send an access token to the app, which is then visualized.  
