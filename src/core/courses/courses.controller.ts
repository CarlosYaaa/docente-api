import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { Usuario } from 'src/decorators/usuario.decorator';
import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';
import { implicitConversion } from 'src/utils/implicitConversion.util';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CoursesService } from './courses.service';
import { AddStudentRequest, AllCourseResponse, CursosRequest, getAllStudentsForCourseResponse } from './dto/courses.dto';

@Controller('courses')
@UseGuards(JwtAuthGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post('/')
  async createCourses(
    @Usuario() usuario: UsuarioPayload,
    @Body(ValidationPipe)
    cursoRequest: CursosRequest,
  ): Promise<RespuestaServidor> {
    const respuesta = await this.coursesService.createCourse(
      usuario,
      cursoRequest,
    );
    return respuesta;
  }

  @Get('/')
  async getAllCourse(
    @Usuario() usuario: UsuarioPayload,
    @Query(new ValidationPipe(implicitConversion))
    query: BusquedaServicioRequest,
    ): Promise<AllCourseResponse[]> {
    const respuesta = await this.coursesService.getAllCourse(usuario, query);
    return respuesta;
  }

  @Post('/student/:idCourse')
  async addStundent(
    @Param('idCourse', new ValidationPipe(implicitConversion))
    idCourse: string,
    @Body(ValidationPipe)
    idStudent: AddStudentRequest,
  ): Promise<RespuestaServidor> {
    const respuesta = await this.coursesService.addStudent(idStudent, idCourse);
    return respuesta;
  }

  @Get('/students/:idCourse')
  async getAllStudentsForCourse(
    @Param('idCourse', new ValidationPipe(implicitConversion))
    idCourse: string,
  ): Promise<getAllStudentsForCourseResponse> {
    const respuesta = await this.coursesService.getAllStudentsForCourse(idCourse);
    return respuesta;
  }
}
