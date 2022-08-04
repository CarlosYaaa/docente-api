export interface UsuarioResponse {
    readonly _id: string;
    readonly nombres: string;
    readonly apellidoPaterno: string;
    readonly apellidoMaterno: string;
    readonly email?: string;
    readonly tipoUsuario?: string;
    readonly telefono?: number;
    readonly edad?: number;
    readonly nombreCompleto: string;
}
