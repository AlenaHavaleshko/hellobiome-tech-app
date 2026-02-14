export type MicrobeType = 'bacteria' | 'fungi';

export type MicrobeRole = 'beneficial' | 'neutral' | 'pathogenic';

export interface Taxonomy {
 genus: string;
 phylum: string;
}


export interface Microbe {
  id: string;
  name: string;
  type: MicrobeType;
  abundance: number;
  role: MicrobeRole;
  taxonomy?: Taxonomy;
}


