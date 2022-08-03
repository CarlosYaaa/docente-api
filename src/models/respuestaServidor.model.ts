export interface RespuestaServidor {
  readonly message: string;
  readonly data?: { [param: string]: any };
}
