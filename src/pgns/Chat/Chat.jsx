import FormularioEnvio from './FormularioEnvio/FormularioEnvio.jsx'
import ListaChats from './ListaChats/ListaChats.jsx'
import Mensajes from './Mensajes/Mensaje.jsx'
import Logo from '../../Componentes/Logo/Logo.jsx'
import Usuario from '../../Componentes/Usuario/Usuario.jsx'

const Chat = () => {

    return <>
        <Logo />
        <Usuario />
        <ListaChats />
        <Mensajes />
        <FormularioEnvio />
    </>
}

export default Chat;