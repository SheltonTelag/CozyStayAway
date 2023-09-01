import Servicios from "./Servicios/Servicios";
import Mapa from "./Mapa/Mapa";
import FormularioReseva from "./FormularioReserva/FormularioReserva";
import Informacion from "./Informacion/Informacion";
import Logo from "../../Componentes/Logo/Logo";
import Usuario from "../../Componentes/Usuario/Usuario";

const Resultado = () => {

    return<>
        <Logo />
        <Usuario />
        <Informacion />
        <FormularioReseva />
        <Servicios />
        <Mapa />
    </>
}

export default Resultado;