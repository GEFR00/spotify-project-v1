import { Injectable } from '@nestjs/common';
import { Artista } from 'src/models/artista';

@Injectable()
export class ArtistasService {

    private artistas: Artista[] = [];

    obtenerArtistas(): Artista[] {
        return this.artistas;
    }

    obtenerArtistaPorId( id: number ): Artista {
        const artista = this.artistas.find( 
            artista => artista.id == id 
        );
        return artista ? artista : null;
    }

    crearArtista( artista: Artista ): void {
        artista.id = this.artistas.length + 1;
        this.artistas.push(artista);
    }

    eliminarArtista( id: number ): void {
        this.artistas.forEach((artista) => {
            if(artista.id == id) {
                this.artistas.splice(artista.id - 1, 1);
            }
        })
    }

    editarArtista( id: number, artista: Artista ): void {

        let existeArtista: Artista = this.obtenerArtistaPorId(id);

        if( existeArtista ) {
            existeArtista.id = artista.id;
            existeArtista.nombre = artista.nombre;
            existeArtista.biografia = artista.biografia;
            existeArtista.tipo = artista.tipo;
            existeArtista.pais = artista.pais;
            existeArtista.generoMusical = artista.generoMusical;
            existeArtista.oyentesMensuales = artista.oyentesMensuales;
        }
    }

}
