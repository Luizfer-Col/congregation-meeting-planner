import { SvgProps } from "react-native-svg";

export enum ProgramStatus {
    Complete = 'Completado',
    Parcial = 'En progreso',
  }
  
  export interface Program {
    month: string;
    status: ProgramStatus | null;
  }
  
  export interface Week {
    id: number;
    date: string;
    week: string;
    status: string;
    president: string;
  }

  export type Persona = {
    nombre: string;
    genero: 'hombre' | 'mujer';
  };

  export type RootStackParamList = {
    AddProgram: {id: number} | undefined;
    NewWeekScreen: {id: number} | undefined;
  };

  export interface ExtendedSvgProps  extends SvgProps{
    xmlns?: string;
}
