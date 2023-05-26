import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'tiendaapi',
  connector: 'mongodb',
  url: 'mongodb://localhost:27017/tiendaapi',
  host: 'loclahost',
  port: 27017,
  user: 'root',
  password: '',
  database: 'tiendaapi',
  useNewUrlParser: false
};/* mongodb://root@localhost:27017/ */

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TiendaapiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'tiendaapi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.tiendaapi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
