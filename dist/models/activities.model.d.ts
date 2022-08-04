import mongoose from 'mongoose';
export declare const ActivitySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    nombre: string;
    descripcion: string;
    idCurso: typeof mongoose.Types.ObjectId;
    fechaActividad: Date;
}>;
