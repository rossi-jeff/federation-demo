## install packages

`npm i`

## configure environment

`cp env-example .env`

edit .env file to contain your username for local postgress

## install db local

`npm run push:organizations`
`npm run push:activities`
`npm run push:people`

## run codegen

`npm run codegen`

## seed the databases

`npm run seed`

## start servers

`npm run start:services`

open a new console tab

`npm run start:gateway`