import * as express from 'express'
import * as bodyParser from 'body-parser'

class App {
  // Init app
  public app: express.Application

  // Init constructor
  constructor() {
    this.app = express()
    this.config()
  }

  // Init config function
  private config(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
}

// export app
export default new App().app
