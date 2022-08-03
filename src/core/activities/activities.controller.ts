import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { RespuestaServidor } from 'src/models/respuestaServidor.model';
import { implicitConversion } from 'src/utils/implicitConversion.util';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ActivitiesService } from './activities.service';
import { ActivitiesResponse, ActivityEditRequest, ActivityRequest } from './dto/activity.dto';

@Controller('activities')
@UseGuards(JwtAuthGuard)

export class ActivitiesController {
    constructor(private readonly activitiesService: ActivitiesService) {}

    @Post('/')
    async createActivity(
        @Body(ValidationPipe)
        activityRequest: ActivityRequest
    ): Promise<RespuestaServidor> {
        const respuesta = await this.activitiesService.createActivity(activityRequest)
        return respuesta;
    }

    @Get('/:idCurso')
    async getAllActivities(
        @Param('idCurso', new ValidationPipe(implicitConversion))
        idCurso: string,
    ): Promise<ActivitiesResponse[]> {
        const respuesta = await this.activitiesService.getAllActivities(idCurso)
        return respuesta;
    }

    @Patch('/:idActividad')
    async editActivityById(
        @Param('idActividad', new ValidationPipe(implicitConversion))
        idActividad: string,
        @Body(ValidationPipe)
        activityEditRequest: ActivityEditRequest
    ): Promise<RespuestaServidor> {
        const respuesta = await this.activitiesService.editActivityById(idActividad, activityEditRequest)
        return respuesta;
    }

    @Delete('/:idActividad')
    async deleteActivityById(
        @Param('idActividad', new ValidationPipe(implicitConversion))
        idActividad: string,
    ): Promise<RespuestaServidor> {
        const respuesta = await this.activitiesService.deleteActivityById(idActividad)
        return respuesta;
    }
}
