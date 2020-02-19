import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const CrmSchema = new Schema(
  {
    firstName: {
      type: String,
      required: 'Enter the name',
    },
    lastName: {
      type: String,
      required: 'Enter the name',
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamp: {
      createdAt: true,
      updatedAt: true,
    },
  }
)
const Contact = mongoose.model('contact', CrmSchema)
export default Contact
