import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Artistas } from './models/artistas';

@Controller()
export class AppController {

  artistas: Artistas[] = [];

  constructor(private readonly appService: AppService) {

    let artista1 = new Artistas(1, "The Beatles", "Sin bio" , "banda", "Reino Unido", "Rock", 1000000);
    let artista2 = new Artistas(2, "Queen", "Sin bio", "banda", "Reino Unido", "Rock", 900000);

    this.artistas = [
      artista1, 
      artista2
    ];
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('artistas')
  obtenerArtistas(): Artistas[] {
    return this.artistas;
  }

  @Post('artistas')
  crearArtista( @Body() artista: Artistas ) {
    
    artista.id = this.artistas.length + 1;
    this.artistas.push(artista);
  }
}
