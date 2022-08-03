import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TipoUsuario } from 'src/enums/usuario.enum';
import { IUsuario } from 'src/interface/usuario.interface';
import { BusquedaServicioRequest } from 'src/models/dto/busqueda.dto';
import { ErrorUtil } from '../utils/error.utils';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Usuario') private readonly usuarioModel: Model<IUsuario>,
  ) {}

  async getAllStudents(query: BusquedaServicioRequest) {
    try {
      let match = {
        tipoUsuario: TipoUsuario.ESTUDIANTE,
      };
      if (query.palabraClave) {
        match['nombreCompleto'] = {
          $regex: `.*${query.palabraClave}.*`,
        };
      }
      const allStudents = await this.usuarioModel
        .find(match)
        .select(
          `_id nombres 
            apellidoMaterno
            apellidoPaterno
            nombreCompleto
            edad
            telefono
            email tipoUsuario`,
        )
        .skip(query.offset)
        .limit(query.limit);

      return allStudents;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }

  async getUser(idUsuario: string) {
    try {
      const user = await this.usuarioModel.findById({
        _id: idUsuario,
      }).select(`_id
      nombres
      apellidoMaterno
      apellidoPaterno
      nombreCompleto
      edad
      telefono
      email
      tipoUsuario`);
      return user;
    } catch (error) {
      ErrorUtil.handleError(error);
    }
  }
}
