export interface Qualification extends Document {
    readonly _id: string;
    readonly descripcion: string;
    readonly fechaNota: Date;
    readonly idCurso: string;
    readonly estudiantes: QualificationStudent[];
}
export interface QualificationStudent {
    readonly estudiante: string;
    readonly nota: number;
    readonly idCalificacion?: string;
}
