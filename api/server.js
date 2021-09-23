const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-routes');
const chartRouter = require('./chart/chart-router');
const personaRouter = require('./persona/persona-router');
const rollerRouter = require('./roller/roller-router');
const spRouter = require('./sp/sp-router');
const userRouter = require('./users/users-router');

const { logger } = require('./logger/logger');
const { verifyToken } = require('./auth/auth-middleware');

const server = express();
server.use(helmet() );
server.use(express.json() );
server.use(cors() );

server.use(logger);

server.use("/api/auth", authRouter);
server.use("/api/chart", [verifyToken], chartRouter);
server.use("/api/users", [verifyToken], userRouter);
server.use("/api/persona", [verifyToken], personaRouter);
server.use("/api/roller", [verifyToken], rollerRouter);
server.use("/api/sp", spRouter);

server.get("/", (req,res) => {
    res.status(201).json({message: "Yip, yip, Appa!"});
})

// server.use('*', (req, res) => {
//     res.status(404).json({
//         message: "That endpoint is not set up yet."
//     })
// })

server.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        message: "Unknown server error",
        err: err.message
    })

    if(1 === 0) next();
})

module.exports = server;