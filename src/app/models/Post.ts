export class Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: string;
  categoria: string;
  id: number;
  icono: string;

  constructor(
    pTitulo: string,
    pTexto: string,
    pAutor: string,
    pImagen: string,
    pFecha: string,
    pCategoria: string
  ) {
    this.titulo = pTitulo;
    this.texto = pTexto;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.fecha = pFecha;
    this.categoria = pCategoria;
    this.id = 0;
    this.icono = "";
  }
}
