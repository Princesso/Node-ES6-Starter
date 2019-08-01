import express from 'express';
const app = express();
// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})