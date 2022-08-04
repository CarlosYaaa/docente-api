import { Schema } from 'mongoose';
import mongoose from 'mongoose';
export declare const QualificationStudentSchema: Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    nota: number;
    estudiante?: typeof mongoose.Types.ObjectId;
    idCalificacion?: typeof mongoose.Types.ObjectId;
}>;
