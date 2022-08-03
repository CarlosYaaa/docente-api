import { Body, Controller, Get, Param, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { Usuario } from 'src/decorators/usuario.decorator';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { implicitConversion } from 'src/utils/implicitConversion.util';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AttendanceService } from './attendance.service';
import { AttendanceRequest, AttendanceStudentRequest, GetAllAttendanceResponse, GetAttendanceByIdResponse } from './dto/attendance.dto';

@Controller('attendance')
@UseGuards(JwtAuthGuard)

export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('/')
  async createAttendance(
    @Usuario() usuario: UsuarioPayload,
    @Body(ValidationPipe)
    attendanceRequest: AttendanceRequest
  ): Promise<RespuestaServidor> {
    const respuesta = await this.attendanceService.createAttendance(usuario, attendanceRequest)
    return respuesta;
  }

  @Get('/:idCourse')
  async getAllAttendances(
    @Param('idCourse', new ValidationPipe(implicitConversion))
    idCourse: string,
  ): Promise<GetAllAttendanceResponse[]> {
    const respuesta = await this.attendanceService.getAllAttendances(idCourse)
    return respuesta;
  }

  @Get('/detail/:idAttendance')
  async getAttendanceById(
    @Param('idAttendance', new ValidationPipe(implicitConversion))
    idAttendance: string,
  ): Promise<GetAttendanceByIdResponse> {
    const respuesta = await this.attendanceService.getAttendanceById(idAttendance)
    return respuesta;
  }

  @Patch('/:idAttendance')
  async editAttendanceById(
    @Param('idAttendance', new ValidationPipe(implicitConversion))
    idAttendance: string,
    @Body(ValidationPipe)
    attendanceEditRequest: AttendanceStudentRequest
  ): Promise<RespuestaServidor> {
    console.log(attendanceEditRequest)
    const respuesta = await this.attendanceService.editAttendanceById(idAttendance, attendanceEditRequest)
    return respuesta;
  }

}
