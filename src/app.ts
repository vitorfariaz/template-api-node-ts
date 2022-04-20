import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.routes();

        // this.database();  // we need to create database for this to work
        console.log('\'src/app.ts\' Created')
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());

    }

    private database(): void {
        mongoose.connect('mongodb://localhost:27017/tsnode');
    }

    private routes(): void {
        this.express.get('/', (req, res) => {
            console.log('GET request realized');
            return res.send('hello world, it worked!');
        })

    }
}

export default new App().express
