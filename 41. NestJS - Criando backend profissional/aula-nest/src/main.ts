import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/* 
Módulo (@Module): Funciona como o agregador ou a "fronteira" da funcionalidade. Ele declara quais controladores e serviços pertencem àquele grupo e o que pode ser compartilhado com outros módulos.

Controlador (@Controller): Trata das requisições que chegam da interface (HTTP). Por exemplo, as rotas associadas aos cliques ou envios na aba correspondente.

Serviço (@Injectable): Concentra a lógica de negócio e as regras específicas daquela área (processamento de dados, validações pesadas, comunicação com banco de dados).
*/

// Aequivo que inicia o nosso projeto

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Cria a aplicação NestJS a partir do módulo principal
  await app.listen(process.env.PORT ?? 3000); // Inicia o servidor na porta especificada ou na porta 3000 por padrão
}
void bootstrap();
