import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from 'src/interface/activity.interface';
import { ErrorUtil } from '../utils/error.utils';
import { ActivityEditRequest, ActivityRequest } from './dto/activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel('Activity') private readonly activityModel: Model<Activity>,
  ) {}

  async createActivity(activity: ActivityRequest) {
    try {
      const activityCreado = await this.activityModel.create(activity);
      if (!activityCreado) {
        throw new BadRequestException({
          message: 'No se pudo crear la actividad',
        });
      }
      return {
        message: 'La actividad se ha creado satisfactoriamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getAllActivities(idCurso: string) {
    try {
      const activities = await this.activityModel
        .find({
          idCurso,
        })
        .select(`_id nombre descripcion idCurso fechaActividad`);
      if (!activities) {
        throw new BadRequestException({
          message: 'No se encontraron actividades para ese curso',
        });
      }
      return activities;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async editActivityById(idActivity: string, activity: ActivityEditRequest) {
    try {
      const activityEditado = await this.activityModel.findByIdAndUpdate(
        idActivity,
        activity,
        { new: true },
      );
      if (!activityEditado) {
        throw new BadRequestException({
          message: 'No se pudo editar la actividad',
        });
      }
      return {
        message: 'La actividad se ha editado satisfactoriamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async deleteActivityById(idActividad: string) { 
    try {
      const activityEliminado = await this.activityModel.findByIdAndDelete(idActividad);
      if (!activityEliminado) {
        throw new BadRequestException({
          message: 'No se pudo eliminar la actividad',
        });
      }
      return {
        message: 'La actividad se ha eliminado correctamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
