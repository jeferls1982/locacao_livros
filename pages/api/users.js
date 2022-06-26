import axios from 'axios';
import User from '../../database/models/user';
import logger from '../../services/logger';

export default function handler(req, res) {
    logger.info(`Request headers: ${JSON.stringify(req.headers)}`);
    console.log("ok")
    axios.get("http://localhost:3001/contato").then(response => {
        console.log(response)
        const users = [{ "nome": "jeferson" }, { "nome": "jairo" }, { "nome": "jair" }, { "nome": "juvenal" }, { "nome": "juvencio" }, { "nome": "jamerson" }]

    }).catch(e => {
        console.log(e);
    })

    res.status(200).json(users);

}