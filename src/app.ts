import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();

        this.database();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect('mongodb://mymongo:27017/pets');
    }

    private routes(): void {
        
        //   without routes 
        //    this.express.get('/', (req, res) => {

        //     console.log('GET request realized');

        //     return res.send('hello world, it worked!');
        // }) 

        this.express.use(routes)

    }
}

export default new App().express
