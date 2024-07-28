import { Router } from 'express';
import EmailDeriverController from './controller';
import EmailDeriverService from './service/email-deriver.service';
import EmailDeriverRepository from './repository/email-deriver.repository';

const router = Router();
const controller = new EmailDeriverController(new EmailDeriverService(new EmailDeriverRepository()));
router.post('/', controller.deriveEmail);

export default router;

