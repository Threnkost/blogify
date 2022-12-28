import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import students from './routes/students.js';

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

app.use("/students", students);

const CONNECTION_URL = "mongodb://127.0.0.1:27017";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(
    app.listen(PORT, () => console.log(`Server is active on ${PORT}`))
)
.catch(
    err => {
        console.log(err.message);
    }
);