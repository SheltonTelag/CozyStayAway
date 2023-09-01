import Logo from '../../Componentes/Logo/Logo';
import Usuario from '../../Componentes/Usuario/Usuario.jsx';
import Buscador from './Buscador/Buscador.jsx'
import Apartamentos from '../../Componentes/Apartamentos/Apartamentos.jsx'

const Home = () => {
    return <>
        <Logo />
        <Usuario />
        <Buscador />
        <Apartamentos />
    </>
}

export default Home;