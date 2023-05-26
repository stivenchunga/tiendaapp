import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TiendaapiDataSource} from '../datasources';
import {Factura, FacturaRelations} from '../models';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {
  constructor(
    @inject('datasources.tiendaapi') dataSource: TiendaapiDataSource,
  ) {
    super(Factura, dataSource);
  }
}
