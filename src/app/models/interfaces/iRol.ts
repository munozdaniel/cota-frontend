import { IUsuario } from './iUsuario';

export interface IRol {
    _id?: string;
    nombre: string;
    habilitado: boolean;
    // Relaciones
    usuarios?: IUsuario[];
    // Campos dinamicos (Creados en tiempo de ejecución)
}
