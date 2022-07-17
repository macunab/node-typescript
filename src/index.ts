import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { CommonRoutesConfig } from './helpers/CommonRoutesConfig';
import { UserRoutes } from './routes/userRouter';

dotenv.config();

if(!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Application = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(helmet());
app.use(cors());
app.use(express.json());

routes.push(new UserRoutes(app));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});