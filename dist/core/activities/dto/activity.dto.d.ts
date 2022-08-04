export declare class ActivityRequest {
    nombre: string;
    descripcion: string;
    idCurso: string;
    fechaActividad: Date;
}
export declare class ActivityEditRequest {
    nombre: string;
    descripcion: string;
    idCurso: string;
    fechaActividad: Date;
}
export interface ActivitiesResponse {
    readonly nombre: string;
    readonly descripcion: string;
    readonly idCurso: string;
    readonly fechaActividad: Date;
}
