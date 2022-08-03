import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsuarioPayload } from 'src/models/usuarioPayload.model';

export const Usuario = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UsuarioPayload;
  },
);
