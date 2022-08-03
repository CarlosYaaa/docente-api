import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { implicitConversion } from 'src/utils/implicitConversion.util';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  AllQualificationForCourseResponse,
  EditQualificationRequest,
  QualificationByIdResponse,
  QualificationRequest,
} from './dto/qualification.dto';
import { QualificationService } from './qualification.service';

@Controller('qualification')
@UseGuards(JwtAuthGuard)

export class QualificationController {
  constructor(private readonly qualificationService: QualificationService) {}

  @Post('/')
  async createQualification(
    @Body(ValidationPipe)
    qualification: QualificationRequest,
  ): Promise<RespuestaServidor> {
    const respuesta = await this.qualificationService.createQualification(
      qualification,
    );
    return respuesta;
  }

  @Get('/course/:idCurso')
  async getQualificationsOfCourse(
    @Param('idCurso', new ValidationPipe(implicitConversion))
    idCurso: string,
  ): Promise<AllQualificationForCourseResponse[]> {
    const respuesta = await this.qualificationService.getQualificationsOfCourse(
      idCurso,
    );
    return respuesta;
  }

  @Get('/:idQualification')
  async getQualificationsById(
    @Param('idQualification', new ValidationPipe(implicitConversion))
    idQualification: string,
  ): Promise<QualificationByIdResponse> {
    const respuesta = await this.qualificationService.getQualificationsById(
      idQualification,
    );
    return respuesta;
  }

  @Patch('/:idQualification')
  async editQualificationById(
    @Param('idQualification', new ValidationPipe(implicitConversion))
    idQualification: string,
    @Body(ValidationPipe)
    editQualificationRequest: EditQualificationRequest,
  ): Promise<RespuestaServidor> {
    const respuesta = await this.qualificationService.editQualificationById(
      idQualification,
      editQualificationRequest,
    );
    return respuesta;
  }
}
