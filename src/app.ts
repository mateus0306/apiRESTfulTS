//ENV variables
require("dotenv").config();

import express from "express";
import config from "config";


const app = express();

//Json middlewar
app.use(express.json());

//DB
import db from "../config/db"


//Routes
import router from "./router";


//logger
import Logger from "../config/logger"

//Middlewares
import morganMiddleware from './middleware/morganMiddleware';


app.use(morganMiddleware);

app.use("/api/", router);



//app port
const port = config.get<number>('port');

app.listen(3000,async () => {

    await db();
    Logger.info(`Aplicacao funcionando na porta: ${port}`);
    
});