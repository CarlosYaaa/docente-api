import mongoose from 'mongoose';
import { DayCourses } from 'src/enums/courses.enum';
import { Schema } from 'mongoose';

export const CourseSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    enum: [
      DayCourses.LUNES,
      DayCourses.MARTES,
      DayCourses.MIERCOLES,
      DayCourses.JUEVES,
      DayCourses.VIERNES,
    ],
    required: true,
  },
  schedule: [
    {
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },
  ],
  students: [{
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  }],
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'Usuario',
  },
});
