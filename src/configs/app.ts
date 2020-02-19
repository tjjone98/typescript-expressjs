import * as express from 'express'
import * as bodyParser from 'body-parser'
import { CrmRoutes } from '../routes/crm'
class App {
  // Init app
  public app: express.Application
  public crmRouter: CrmRoutes = new CrmRoutes()

  // Init constructor
  constructor() {
    this.app = express()
    this.config()
    this.crmRouter.routes(this.app)
  }

  // Init config function
  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
}

// export app
export default new App().app
