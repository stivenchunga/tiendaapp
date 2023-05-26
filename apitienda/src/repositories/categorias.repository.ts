import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TiendaapiDataSource} from '../datasources';
import {Categorias, CategoriasRelations} from '../models';

export class CategoriasRepository extends DefaultCrudRepository<
  Categorias,
  typeof Categorias.prototype.id,
  CategoriasRelations
> {
  constructor(
    @inject('datasources.tiendaapi') dataSource: TiendaapiDataSource,
  ) {
    super(Categorias, dataSource);
  }
}
