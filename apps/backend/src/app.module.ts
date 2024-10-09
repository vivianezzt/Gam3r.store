import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';


@Module({
  imports: [ProdutoModule, PedidoModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
