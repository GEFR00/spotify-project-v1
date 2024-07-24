import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasController } from './controllers/artistas/artistas.controller';
import { CancionesController } from './controllers/canciones/canciones.controller';
import { UsuariosController } from './controllers/usuarios/usuarios.controller';
import { ArtistasService } from './services/artistas/artistas.service';

@Module({
  imports: [],
  controllers: [
    AppController, 
    ArtistasController, 
    CancionesController, 
    UsuariosController
  ],
  providers: [AppService, ArtistasService],
})
export class AppModule {}
