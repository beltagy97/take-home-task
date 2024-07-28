import { Request, Response } from 'express';
import EmailDeriverService from './service/email-deriver.service';
import { isValidRequest } from './utils';


class EmailDeriverController {
  private readonly service: EmailDeriverService;


  constructor() {
    this.service = new EmailDeriverService();
  }

  deriveEmail = async (req: Request, res: Response) => {
    //request Validation
    const { name: fullName, domain } = req.body;

    if (!isValidRequest(fullName, domain)) {
      res.status(400).json({ error: 'Please check your inputs' });
      return;
    }

    try {
      const email = await this.service.getEmail(fullName!, domain!);
      res.json({ name: fullName, email });
      return;
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }
    }
  };
}

export default EmailDeriverController;

