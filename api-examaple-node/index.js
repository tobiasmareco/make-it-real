import express from 'express';
import { conectDatabase } from './src/config/db.config.js';
import { router } from './src/routes/index.router.js';
const app = express();

conectDatabase()

app.use(express.json());

app.use('/api',router)

app.listen(3080,()=>{
    console.log(`listening on port 3080 http://localhost:3080/api`);
})