/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffee-caesar-app.us', // the auth0 domain prefix
    audience: 'cofeeShop', // the audience set for the auth0 app
    clientId: 'Fwv7GavFgXWfKSVMl7IxsvFg0i9oa8t6', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
