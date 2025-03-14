import { Artista } from "./artista";

export class Cancion {

    public id: number;
    public nombre: string;
    public album: string;
    public reproducciones: number;
    public generoMusical: string;
    public duracion: number;
    public artista: Artista;

    constructor(
        id: number, 
        nombre: string,
        album: string,
        reproducciones: number,
        generoMusical: string,
        duracion: number,
        artista: Artista
    ) {
        this.id = id;
        this.nombre = nombre;
        this.album = album;
        this.reproducciones = reproducciones;
        this.generoMusical = generoMusical;
        this.duracion = duracion;
        this.artista = artista;
    }
}