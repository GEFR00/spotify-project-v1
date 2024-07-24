import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './models/artista';
import { Cancion } from './models/cancion';

@Controller()
export class AppController {

  artistas: Artista[] = [];
  canciones: Cancion[] = [];

  constructor(private readonly appService: AppService) {

    let artista1 = new Artista(1, "The Beatles", "Sin bio" , "banda", "Reino Unido", "Rock", 1000000);
    let artista2 = new Artista(2, "Queen", "Sin bio", "banda", "Reino Unido", "Rock", 900000);

    let cancion1 = new Cancion(1, "Hey Jude", "The Beatles", 1000000, "Rock", 7, artista1);

    this.artistas = [
      artista1, 
      artista2
    ];

    this.canciones = [
      cancion1
    ];
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // *** Artistas ***

  //Obtener todos los artistas
  @Get('artistas')
  obtenerArtistas(): Artista[] {
    return this.artistas;
  }

  //Obtener un artista por su id
  @Get('artista/:id')
  obtenerArtistaPorId( @Param('id') id: number ): Artista {
    return this.artistas.find( artista => artista.id == id );
  }

  /*  Obtener un artista por su nombre o por su país
      artista?nombre=The Beatles&pais=Reino Unido   */
  @Get('artista')
  obtenerArtistaPorNombre(
    @Query('nombre') nombre: string, 
    @Query('pais') pais: string
  ): Artista {

    if(nombre) {
      return this.artistas.find( artista => artista.nombre == nombre );
    }

    if(pais) {
      return this.artistas.find( artista => artista.pais == pais );
    }

    return null;

  }

  //Crear un artista
  @Post('artistas')
  crearArtista( @Body() artista: Artista ) {
    artista.id = this.artistas.length + 1;
    this.artistas.push(artista);
  }

  // *** Canciones ***

  //Obtener todas las canciones
  @Get('canciones')
  obtenerCanciones(): Cancion[] {
    return this.canciones;
  }

  //Crear una canción
  @Post('canciones')
  crearCancion( @Body() cancion: Cancion ) {
    cancion.id = this.canciones.length + 1;
    this.canciones.push(cancion);
  }


}
