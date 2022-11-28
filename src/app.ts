import cors from "cors";
import express, {
    Application
} from "express";
import morgan from 'morgan-body';
import logger from "./middlewares/logger";
import routes from "./routes";

class App {
    public readonly app: Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.app.use(express.json());
        this.app.use(cors());
        
        morgan(this.app, {
            noColors: true,
            prettify: false,
            logReqUserAgent: false,
            stream: {
                write: (message: string) => logger.info(message) as any
            }
        });
    }

    private routes(): void {
        this.app.use("/api", routes);
    }
}

export default new App();