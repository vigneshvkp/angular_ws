// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDdrF8nVfT5QkA4pEgXt53n8vaVulqh5o4',
    authDomain: 'employee-register-fb465.firebaseapp.com',
    databaseURL: 'https://employee-register-fb465.firebaseio.com',
    projectId: 'employee-register-fb465',
    storageBucket: 'employee-register-fb465.appspot.com',
    messagingSenderId: '155688605128'
  }

};
