# Future Wave Frontend

## Intro

This project is an administrative dashboard designed to help users manage employee records. It includes features for adding new employees, viewing existing records, updating details, and deleting entries. The goal is to provide a straightforward and efficient way for administrators to oversee employee information through a user-friendly interface.

## Prerequisites

To build and run this app locally you will need a few things:

-   Install [Node.js](https://nodejs.org/en/)
-   Install [VS Code](https://code.visualstudio.com/)
-   You will need a **MongoDB server** which could either be hosted locally or online.
-   Once you know your MongoDB URI, set the value of **mongoURI** in **config/default.json**.

## Getting Started

First, run the development server in terminal:

```bash
npm i
npm run dev
```

Finally, you can access [http://localhost:5000/api](http://localhost:5000/api) and see your API running.

## Structure (Ajustar)

### Folder structure

-   **error**: Config handling errors in server:
    -   **errorHandler**: Handle all errors in controller;
    -   **httpError**: Support service to handle customized errors;
    -   **validateRequest**: Support route to handle customized validation errors.
-   **http**: Layer with routes and controller, basically a controller layer:
    -   **index.routes**: Group all the routes in a centralized file;
    -   **XXX.routes**: Each route group and call middlewares;
    -   **XXX.controller**: Controller layer.
-   **models**: Database entities.
-   **services**: Bussiness rule layer and can call ORM.
-   **shared**: Main server part for global settings:
    -   **database**: Config database connection with MongoDB;
    -   **server**: Centralized server where there is main project configs.

### Main commands

-   **build** - Build the production package
-   **watch-build** - Verify if there is some problem to build production package
-   **start** - Run the server in production mode
-   **dev** - Run the server in development mode
-   **lint** - Verify eslint and code organization
-   **lint:fix** - Fix eslint and code organization

## Dependencies

## `dependencies`

| Package           | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| config            | Universal configurations for your app.                                              |
| cors              | Node.js package for providing a Express middleware that can be used to enable CORS. |
| express           | Node.js web framework.                                                              |
| express-validator | Easy form validation for Express.                                                   |
| http-status-codes | HTTP status codes constants.                                                        |
| mongoose          | MongoDB modeling tool in an async environment.                                      |
| request           | Simplified HTTP client for Node.js.                                                 |
| typescript        | Typed superset of JavaScript.                                                       |

## `devDependencies`

Since TypeScript is used, dependencies should be accompanied by their corresponding DefinitelyTyped @types package.

| Package                          | Description                                                              |
| -------------------------------- | ------------------------------------------------------------------------ |
| @types/config                    | DefinitelyTyped for config                                               |
| @types/cors                      | DefinitelyTyped for cors                                                 |
| @types/express                   | DefinitelyTyped for express                                              |
| @types/mongoose                  | DefinitelyTyped for mongoose                                             |
| @typescript-eslint/eslint-plugin | TypeScript plugin for ESLint                                             |
| eslint                           | JavaScript linter                                                        |
| eslint-config-prettier           | Turns off all rules that are unnecessary or might conflict with Prettier |
| eslint-plugin-prettier           | Runs Prettier as an ESLint rule                                          |
| prettier                         | Code formatter                                                           |
| ts-node-dev                      | Compiles TypeScript and restarts Node.js on file changes                 |

To install or update these dependencies you can use `npm install` or `npm update`.

## Author

-   Name: Willer Santos
-   Graduated: BA Chemical Engineering
