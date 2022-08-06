El ultimo ejercicio se encuentra en la carpeta "Tutorial-Photos-Api". Deben descargarlo y ejecutar el comando
`npm install`. Si por alguna razon obtienen el siguiente error:

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: @ionic/angular-toolkit@3.1.1
npm ERR! Found: @angular-devkit/build-angular@12.0.1
npm ERR! node_modules/@angular-devkit/build-angular
npm ERR!   dev @angular-devkit/build-angular@"^12.0.1" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer @angular-devkit/build-angular@"^0.1102.4" from @ionic/angular-toolkit@3.1.1
npm ERR! node_modules/@ionic/angular-toolkit
npm ERR!   dev @ionic/angular-toolkit@"^3.1.1" from the root project
npm ERR! 
npm ERR! Conflicting peer dependency: @angular-devkit/build-angular@0.1102.19
npm ERR! node_modules/@angular-devkit/build-angular
npm ERR!   peer @angular-devkit/build-angular@"^0.1102.4" from @ionic/angular-toolkit@3.1.1
npm ERR!   node_modules/@ionic/angular-toolkit
npm ERR!     dev @ionic/angular-toolkit@"^3.1.1" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See /home/carlosh/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/carlosh/.npm/_logs/2022-08-06T17_26_37_452Z-debug-0.log


```

Deberan instalar la version 6 de npm así: `npm install -g npm@6` y luego si volver a ejecutar `npm install`
