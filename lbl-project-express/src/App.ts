import express = require('express');
import * as bodyParser from 'body-parser';
import { router } from './router';

/**
 * Entry point for the backend app.
 */
class App {
    public express: express.Application;

    constructor() {
        this.express = express()
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

            next();
        });
        this.mountRoutes();
    }

    /**
     * Mounts all of the api routes.
     */
    private mountRoutes(): void {
        // all api calls have a prefix of api
        this.express.use('/api', router);
    }
}

export default new App().express
