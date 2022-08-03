export interface Activity extends Document {
    nombre: string;
    descripcion: string;
    idCurso: string;
    fechaActividad: Date;
}