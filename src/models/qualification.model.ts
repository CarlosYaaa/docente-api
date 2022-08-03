import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import { QualificationStudentSchema } from './schema/qualificationStudent.schema';

export const QualificationSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  fechaNota: {
    type: Date,
    required: true,
  },
  idCurso: {
    type: mongoose.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  estudiantes: [
    {
      type: QualificationStudentSchema,
    },
  ],
});

QualificationSchema.pre('save', function(next){
    this.estudiantes.forEach(estudiante => {
        estudiante["idCalificacion"] = this._id;
    });
    next();
});
