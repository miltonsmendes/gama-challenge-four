import {Request, Response } from 'express';
import knex from '../database/connection';


export default {

    async list (request: Request, response: Response) {
        var result = await knex('tb_produto').orderBy('nome');

        return response.status(200).json({data: result});
    },

}