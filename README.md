# USERLAB TEST : CRM

### Postgres User Test

Please copy this to a .env file

```
  DB_USER = postgres
  DB_PASSWORD = mypassword
  DB_HOST = localhost
  DB_PORT = 5432
  DB_DATABASE = crmdb
```

## How to Run locally

#### Clone this repository

`$ git clone https://github.com/nriqu322/CRM.git`

#### Go to the folder

`$ cd CRM`

#### Install all dependencies

`$ npm install`

#### Run the server (backend), runs in port 4000

`$ npm run dev`

#### Go to the client folder

`$ cd client`

#### Run the client (frontend) runs in port 3000

`$ npm start`

## Build with

- Create React App
- NodeJS
- Express
- Postgresql

## How to use the app

### Endpoints

#### Example of endpoints server side

Customers
`http://localhost:4000/customers`
`http://localhost:4000/customers/:id`

Contacts
`http://localhost:4000/contacts`
`http://localhost:4000/contacts/:id`

Meetings
`http://localhost:4000/meetings`
`http://localhost:4000/meetings/:id`

Projects
`http://localhost:4000/projects`
`http://localhost:4000/projects/:id`

#### In the client side you can navigate with the navbar links

`http://localhost:3000/`

## Author

👤 **Luis Saavedra**

- Github: [@nriqu322](https://github.com/nriqu322)
- Twitter: [@nriqu322](https://twitter.com/nriqu322)
- Linkedin: [Luis Saavedra](https://linkedin.com/in/luis-saavedra-sanchez/)
