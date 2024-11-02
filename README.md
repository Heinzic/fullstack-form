# Fullstack form

Simple fullstack web app, which sends data from 'contact us' form to backend.
You can see deployed app at https://ryzhenko-fullstack-form.onrender.com/

## Dependencies

* Frontend: React, typescript, styled-components, antd, axios
* Backend: Express, nodemon, typescript

## Installing

* Clone repository:
```
git clone https://github.com/Heinzic/fullstack-form.git
cd fullstack-form
``` 

## Executing program

* Run client
```
cd .\client\
npm i
npm run dev
```
dont forget to change url for axios in FormPage 

* Run server
```
cd ..
cd .\server\
npm i
npm run dev
```