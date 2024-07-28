import { Router } from 'express';
import EmailDeriverController from './controller';

const router = Router();
const controller = new EmailDeriverController();
router.post('/', controller.deriveEmail);

export default router;

