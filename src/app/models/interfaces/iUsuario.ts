import { IRol } from "./iRol";

export interface IUsuario {
    _id?: string;
    password?: string;
    email: string;
    nombre: string;
    apellido: string;
    foto?: string;
    // Relaciones
    rolId: string | IRol;
    // Campos dinamicos (Creados en tiempo de ejecución)
}
