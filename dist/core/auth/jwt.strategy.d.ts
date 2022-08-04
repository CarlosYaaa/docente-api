import { UsuarioPayload } from 'src/models/usuarioPayload.model';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UsuarioPayload): UsuarioPayload;
}
export {};
