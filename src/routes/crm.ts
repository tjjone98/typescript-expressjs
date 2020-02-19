import { Response, Request } from 'express'
import crmController from '../controllers/crmController'
export class CrmRoutes {
  constructor() {}
  public routes(app): void {
    // Test server
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        status: 'success',
        payload: 'Hello World',
      })
    })

    // Get all contacts
    app.route('/contacts').get(crmController.getAllContact)

    // Get contact by id
    app.route('/contact/:id').get(crmController.getContact)
  }
}
