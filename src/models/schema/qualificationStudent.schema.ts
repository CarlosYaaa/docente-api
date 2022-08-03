import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export const QualificationStudentSchema = new Schema({
  estudiante: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  },
  nota: {
    type: Number,
    required: true,
    default: 0,
  },
  idCalificacion: {
    type: mongoose.Types.ObjectId,
    ref: 'Qualification',
  }
});
