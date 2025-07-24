import { defineComponent, ref } from 'vue';

export function sanitizeQuery(query: string): string {
    let cleaned = query.split(';')[0];
    cleaned = cleaned.replace(/[=<>!&|{}()\[\]\\'"~`]/g, '');
    return cleaned.trim();
}

export interface Paciente {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  sexo: string;
  enfermedad: string;
  diasHospitalizacion: number;
  descripcion: string;
  prioridad: string;
  notas: string;
}

export const pacientesMock: Paciente[] = [
  {
    id: 1,
    nombre: sanitizeQuery('Juan'),
    apellido: sanitizeQuery('Pérez'),
    edad: 32,
    sexo: 'Masculino',
    enfermedad: sanitizeQuery('Gripe'),
    diasHospitalizacion: 5,
    descripcion: sanitizeQuery('Sin complicaciones'),
    prioridad: 'Alta',
    notas: sanitizeQuery('Requiere control en 3 días'),
  },
  {
    id: 2,
    nombre: sanitizeQuery('Ana'),
    apellido: sanitizeQuery('Gómez'),
    edad: 45,
    sexo: 'Femenino',
    enfermedad: sanitizeQuery('Neumonía'),
    diasHospitalizacion: 10,
    descripcion: sanitizeQuery('Dificultad respiratoria'),
    prioridad: 'Media',
    notas: sanitizeQuery('Uso de oxígeno permanente'),
  },
];