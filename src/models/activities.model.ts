import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const ActivitySchema = new Schema({ 
    nombre: { 
        type: String,
        required: true,
    },
    descripcion: { 
        type: String,
        required: true,
    },
    idCurso: {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    fechaActividad: {
        type: Date,
        required: true,
    },
});