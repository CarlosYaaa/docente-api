import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { AttendanceService } from './attendance.service';
import { AttendanceRequest, AttendanceStudentRequest, GetAllAttendanceResponse, GetAttendanceByIdResponse } from './dto/attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    createAttendance(usuario: UsuarioPayload, attendanceRequest: AttendanceRequest): Promise<RespuestaServidor>;
    getAllAttendances(idCourse: string): Promise<GetAllAttendanceResponse[]>;
    getAttendanceById(idAttendance: string): Promise<GetAttendanceByIdResponse>;
    editAttendanceById(idAttendance: string, attendanceEditRequest: AttendanceStudentRequest): Promise<RespuestaServidor>;
}
