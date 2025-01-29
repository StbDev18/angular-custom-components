export interface IGestionProcuradores {
    objeto: IProcurador[];
    error:  null;
    status: number;
    exito:  boolean;
}

export interface IProcurador {
    nombreProcurador: string;
    email:            string;
    radicado:         string;
    fecha:            Date;
}
