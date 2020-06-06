import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [{
        name: 'Eduardo Dias',
        email: 'carloseduardodiasm@gmail.com'
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: users[0].name,
                email: users[0].email
            },

            message: {
                subject: 'Welcome to the TypeScript Club',
                body: `Welcome, ${users[0].name}!`
            }
        });

        return res.status(200).json({
            actionStatus: 'email was sent'
        });
    }
}