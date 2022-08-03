import { Injectable } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    });
  }

  validate(payload: UsuarioPayload): UsuarioPayload {
    const { ...userData } = payload;

    delete userData['iat'];
    delete userData['exp'];

    return userData;
  }
}
