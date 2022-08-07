import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { ErrorUtil } from '../utils/error.utils';
import { AddStudentRequest, CursosRequest } from './dto/courses.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from 'src/interface/courses.interface';
import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { IUsuario } from 'src/interface/usuario.interface';
import { TipoUsuario } from 'src/enums/usuario.enum';
@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<Course>,
    @InjectModel('Usuario') private readonly usuarioModel: Model<IUsuario>,
  ) {}

  async createCourse(usuario: UsuarioPayload, cursoRequest: CursosRequest) {
    try {
      console.log("Usuario:", usuario)
      const cursoCreado = await this.courseModel.create({
        user: usuario._id,
        descripcion: cursoRequest.descripcion,
        day: cursoRequest.day,
        schedule: cursoRequest.scheduleHours,
      });
      console.log("Que cosas se ha creado:", cursoCreado)
      if(!cursoCreado) {
        throw new NotFoundException({
          message: 'No se pudo crear el curso',
        });
      }
      return {
        message: 'Curso creado satisfactoriamente',
      }
    } catch (error) {
      console.log(error)
      ErrorUtil.handleError(error);
    }
  }

  async getAllCourse(usuario: UsuarioPayload, query: BusquedaServicioRequest) {
    try {
      let match = {
        user: usuario._id,
      };
      if (query.palabraClave) {
        match['descripcion'] = {
          $regex: `.*${query.palabraClave}.*`,
        };
      }
      const allCourses = await this.courseModel
        .find(match)
        .skip(query.offset)
        .limit(query.limit);

      return allCourses;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async addStudent(idStudent: AddStudentRequest, idCourse: string) {
    try {
      if (!idStudent.idStudent) {
        throw new BadRequestException({
          message: 'El id del estudiante no puede ser vacio',
        });
      }
      const studenById = await this.usuarioModel.findById(idStudent.idStudent);
      if (!studenById) {
        throw new BadRequestException({
          message:
            'No existe el usuario con el id espificado, no se puede agregar usuario al curso',
        });
      }
      if (studenById.tipoUsuario !== TipoUsuario.ESTUDIANTE) {
        throw new BadRequestException({
          message: 'El usuario no es de tipo estudiante',
        });
      }

      const ifExistStudent = await this.courseModel.find({
        _id: idCourse,
        students: { $in: idStudent.idStudent },
      });

      if (ifExistStudent.length > 0) {
        throw new BadRequestException({
          message: 'El usuario ya se encuentra inscrito en esta clase',
        });
      }
      const condition = {
        _id: idCourse,
      };
      const update = {
        $push: { students: idStudent.idStudent },
      };

      const addStudent = await this.courseModel.findOneAndUpdate(
        condition,
        update,
      );
      if (!addStudent) {
        throw new BadRequestException({
          message: 'No se pudo agregar el estudiante al curso',
        });
      }
      return { message: 'Estudiante agregado al curso correctamente ' };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getAllStudentsForCourse(idCourse: string) {
    try {
      const getAllStudentsForCourse = await this.courseModel
        .findById({
          _id: idCourse,
        })
        .select(`descripcion students _id`)
        .populate({
          path: 'students',
          select: 'nombres apellidoMaterno apellidoPaterno nombreCompleto',
        })
        .exec();

      return getAllStudentsForCourse;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
