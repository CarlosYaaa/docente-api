export declare class ScheduleHourRequest {
    startTime: string;
    endTime: string;
}
export declare class CursosRequest {
    readonly descripcion: string;
    readonly day: string;
    readonly scheduleHours: ScheduleHourRequest[];
    readonly students: string[];
    readonly user: string;
}
export declare class AddStudentRequest {
    readonly idStudent: string;
}
export interface AllCourseResponse {
    readonly _id: string;
    readonly descripcion: string;
    readonly day: string;
    readonly schedule: ScheduleCourse;
    readonly students?: string[];
    readonly user: string;
}
export interface ScheduleCourse {
    readonly startTime: string;
    readonly endTime: string;
}
export interface getAllStudentsForCourseResponse {
    readonly _id: string;
    readonly descripcion: string;
    readonly students?: string[];
}
