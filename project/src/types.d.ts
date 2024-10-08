export interface Rango {
  minimo: number;
  maximo: number;
  resultado: number;
}

export interface numeroClase {
  total: number;
  clase: number;
}

export type Distribucion_frecuencia_Props = Rango &
  Omit<numeroClase, "clase"> & { amplitud: number };

export interface LimitesClases {
  min: number;
  max: number;
  amplitud: number;
  isReal: boolean;
}

export interface MarcaClase {
  min: number;
  amplitud: number;
  numero_clase: number;
}

export interface TablaGeneralProps {
  lista: number[]; // lista de datos
  limites_reales: (string | number)[];
  limites_clases: (string | number)[];
  marca_clase: (string | number)[];
  f: Array<{
    limite_inferior: number;
    limite_superior: number;
    contador: number;
  }>;
}
