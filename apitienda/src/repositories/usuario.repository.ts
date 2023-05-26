import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TiendaapiDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.Id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.tiendaapi') dataSource: TiendaapiDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
