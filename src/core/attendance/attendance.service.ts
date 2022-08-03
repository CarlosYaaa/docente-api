import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Attendance } from 'src/interface/attedance.interface';
import { Model } from 'mongoose';
import { Course } from 'src/interface/courses.interface';
import { IUsuario } from 'src/interface/usuario.interface';
import { ErrorUtil } from '../utils/error.utils';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import {
  AttendanceRequest,
  AttendanceStudentRequest,
} from './dto/attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel('Attendance')
    private readonly attendanceModel: Model<Attendance>,
    @InjectModel('Course') private readonly courseModel: Model<Course>,
    @InjectModel('Usuario') private readonly usuarioModel: Model<IUsuario>,
  ) {}

  async createAttendance(
    usuario: UsuarioPayload,
    attendanceRequest: AttendanceRequest,
  ) {
    try {
      const attendanceCreado = await this.attendanceModel.create(
        attendanceRequest,
      );
      if (!attendanceCreado) {
        throw new BadRequestException({
          message: 'No se pudo crear la asistencia',
        });
      }
      return {
        message: 'La asistencia se ha tomado correctamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getAllAttendances(idCurso: string) {
    try {
      const attendances = await this.attendanceModel
        .find({
          idCurso,
        })
        .select(`_id fechaAsistencia idCurso`);
      if (!attendances) {
        throw new BadRequestException({
          message: 'No se encontraron asistencias para ese curso',
        });
      }
      return attendances;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getAttendanceById(idAttendance: string) {
    try {
      const attendance = await this.attendanceModel
        .findById(idAttendance)
        .select(`fechaAsistencia estudiantes idCurso`)
        .populate('idCurso', 'descripcion')
        .populate({
          path: 'estudiantes.estudiante',
          select: `nombres apellidoMaterno apellidoPaterno nombreCompleto`,
        });
      if (!attendance) {
        throw new BadRequestException({
          message: 'No se encontró la asistencia',
        });
      }
      return attendance;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async editAttendanceById(
    idAttendance: string,
    attendanceEditRequest: AttendanceStudentRequest,
  ) {
    try {
      const attendance = await this.attendanceModel.findOneAndUpdate(
        {
          _id: idAttendance,
          'estudiantes._id': attendanceEditRequest.estudiante,
        },
        {
          $set: {
            'estudiantes.$.asistencia': attendanceEditRequest.asistencia,
          },
        },
      );
      if (!attendance) {
        throw new BadRequestException({
          message: 'No se encontró la asistencia',
        });
      }
      return {
        message: 'La actualización se realizó satisfactoriamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
