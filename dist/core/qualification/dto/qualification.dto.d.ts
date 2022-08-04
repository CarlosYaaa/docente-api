import { QualificationStudent } from 'src/interface/qualification.interface';
export declare class QualificationRequest {
    descripcion: string;
    fechaNota: Date;
    idCurso: string;
    estudiantes: QualificationStudentRequest[];
}
export declare class QualificationStudentRequest {
    estudiante: string;
    nota: number;
    idCalificacion: string;
}
export declare class EditQualificationRequest {
    estudiante: string;
    nota: number;
}
export interface AllQualificationForCourseResponse {
    readonly _id: string;
    readonly descripcion: string;
    readonly fechaNota: Date;
}
export interface QualificationByIdResponse {
    readonly _id: string;
    readonly descripcion: string;
    readonly fechaNota: Date;
    readonly idCurso: string;
    readonly estudiantes: QualificationStudent[];
}
