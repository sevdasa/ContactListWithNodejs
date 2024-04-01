import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes.js';
import { sequelize } from '../models/index.js';
const app = express();
function loggerMiddleware(req, res, next) {
    try {
        console.log('request: ' + req.method, req.url);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
try {
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully');
} catch (error) {
    console.log('Error in syncing models: ' + error.message);
    throw error;
}
app.disable('etag');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use('/contacts', routes);
const port = 3000;
async function main() {
    app.listen(3000, () => {
        console.log(`Http server listening on port ${port}`);
    })
}
await main();