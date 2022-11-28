import { server } from "./config";
import logger from "./middlewares/logger";
import express from "./app";
import "reflect-metadata";
import { dataSource } from './config/db/index';


dataSource.initialize().then(() => {
    express.app.listen(server.port, () => {
        logger.info(`Server listening on port ${server.port} mode ${server.env}`);
    });
})