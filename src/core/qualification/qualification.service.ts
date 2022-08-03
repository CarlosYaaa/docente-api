import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Qualification } from 'src/interface/qualification.interface';
import {
  EditQualificationRequest,
  QualificationRequest,
} from './dto/qualification.dto';
import { Model } from 'mongoose';
import { ErrorUtil } from '../utils/error.utils';

@Injectable()
export class QualificationService {
  constructor(
    @InjectModel('Qualification')
    private readonly qualificationModel: Model<Qualification>,
  ) {}

  async createQualification(qualification: QualificationRequest) {
    try {
      const createQualification = await this.qualificationModel.create(
        qualification,
      );
      if (!createQualification) {
        throw new NotFoundException({
          message: 'No se pudo crear la calificación',
        });
      }
      return {
        message: 'La calificación se creó satisfactoriamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getQualificationsOfCourse(idCurso: string) {
    try {
      const qualifications = await this.qualificationModel
        .find({
          idCurso,
        })
        .select(
          `_id descripcion 
        fechaNota`,
        )
        .exec();
      return qualifications;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getQualificationsById(idQualification: string) {
    try {
      const qualifications = await this.qualificationModel
        .findOne({
          _id: idQualification,
        })
        .select(`_id descripcion fechaNota estudiantes idCurso`)
        .populate({
          path: 'estudiantes.estudiante',
          select: `nombres apellidoMaterno apellidoPaterno nombreCompleto`,
        })
        .exec();
      return qualifications;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async editQualificationById(
    idQualification: string,
    editQualificationRequest: EditQualificationRequest,
  ) {
    try {
      const editQualification = await this.qualificationModel.findOneAndUpdate(
        {
          _id: idQualification,
          'estudiantes._id': editQualificationRequest.estudiante,
        },
        {
          $set: {
            'estudiantes.$.nota': editQualificationRequest.nota,
          },
        },
      );
      if (!editQualification)
        throw new NotFoundException({
          message:
            'No se encontró al usuario, por lo tanto no se pudo actualizar',
        });

      return {
        message: 'La actualización se realizó satisfactoriamente',
      };
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
