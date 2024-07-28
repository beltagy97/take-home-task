import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { default as deriveEmailRouter } from './emailDeriver/router';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({origin: '*'}))
app.use('/derive-email', deriveEmailRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;