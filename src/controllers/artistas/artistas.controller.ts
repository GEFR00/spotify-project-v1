import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Artista } from 'src/models/artista';
import { ArtistasService } from 'src/services/artistas/artistas.service';

@Controller('artistas') //path /artistas...
export class ArtistasController {

    constructor( private readonly servicio: ArtistasService) {}

    //Obtiene todos los artistas
    @Get()
    obtenerArtistas(): Artista[] {
        return this.servicio.obtenerArtistas();
    }

    //Obtiene un artista por su id
    @Get(':id')
    obtenerArtista( @Param('id') id: number): Artista {

        return this.servicio.obtenerArtistaPorId(id);
    }

    //Crear artista
    @Post()
    crearArtista( @Body() artista: Artista ): void {
        this.servicio.crearArtista(artista);
    }

    //Eliminar un artista
    @Delete(':id')
    eliminarArtista( @Param('id') id: number ): void {
        this.servicio.eliminarArtista(id);
    }

    //Editar un artista
    @Put(':id')
    editarArtista( @Param('id') id: number, @Body() artista: Artista ): void {
        this.servicio.editarArtista(id, artista);
    }

}
