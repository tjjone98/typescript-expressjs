import * as mongoose from 'mongoose'
import Contact from '../models/Crm'
import { Request, Response } from 'express'
import Logger from '../logs/Logger'

class CrmController {
  constructor() {}
  async getAllContact(request: Request, response: Response) {
    const contacts = await Contact.find({})
    if (contacts.length) {
      response.status(200).json(Logger.successLog(contacts))
    } else {
      response.status(405).json(Logger.errorLog('Have an error'))
    }
  }
  async getContact(request: Request, response: Response) {
    const contact = await Contact.find({ _id: request.params.id })
    if (contact) {
      response.status(200).json(Logger.successLog(contact))
    } else {
      response.status(404).json(Logger.errorLog('Not found'))
    }
  }
}
export default new CrmController()
