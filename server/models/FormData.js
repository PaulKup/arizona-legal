const { Schema, model } = require('mongoose');


const FormDataSchema = new Schema(
    {

        createdAt: {
            type: Date,
            default: Date.now
          },
          wardName: {
              type: String,
              required: true,
              trim: true,
              minlength: 1
          },
          guardianName: {
            type: String,
            required: true,
            trim: true,
            minlength: 1
          }
    }
)

const FormData = model('FormData', FormDataSchema);

module.exports = FormData;