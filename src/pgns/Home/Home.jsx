import Logo from '../../Componentes/Logo/Logo';
import Usuario from '../../Componentes/Usuario/Usuario.jsx';
import Buscador from './Buscador/Buscador.jsx'
import Apartamentos from '../../Componentes/Apartamentos/Apartamentos.jsx'
import Filtros from '../Filtros/Filtros.jsx'

const Home = () => {
    return <>
        <Logo />
        <Usuario />
        <Buscador />
        <Filtros
        <Apartamentos />
    </>
}

export default Home;