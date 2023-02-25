import express from 'express';
import { router } from './src/routes/index.router.js';
const app = express();

app.use(express.json());

app.use('/api',router)

app.listen(3080,()=>{
    console.log(`listening on port 3080 http://localhost:3080/api`);
})