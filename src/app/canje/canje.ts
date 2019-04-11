import { Respuesta } from "../respuesta/respuesta";
import { Libro } from "../libros/libro";
import { Usuario } from "../usuario/Usuario";

export class Canje {
    /**
     * EL id del canje
     */
    id:number;

    /**
     * La fecha de creacion del canje
     */
    fecha: Date;

    /**
     * El estado del canje
     */
    estado: String;

    /**
     * La respuesta asociada al canje
     */
    respuesta: Respuesta;

    /**
     * El libro ofrecido en el canje
     */
    libroOfrecido: Libro;

    /**
     * El libro pedido en el canje
     */
    libroPedido: Libro;

    /**
     * El usuario que ofrece el canje
     */
    usuarioQueOfrece: Usuario;

    /**
     * El usuario que recibe el canje
     */

     usuarioQueRecibe: Usuario;
}
