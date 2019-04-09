import { Carro } from "./carro";
import { Libro } from "../libros/libro";

export class CarroDetail extends Carro{
    libros: Libro[];
}
