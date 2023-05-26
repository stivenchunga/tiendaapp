import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Producto extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  bonbre: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  talla: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
