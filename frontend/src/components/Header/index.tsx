import logo from '../../assets/img/image 1.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-cabecalho">
                <img src={logo} alt="Logo DSmeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/AllanGoto">Allan</a></p>
            </div>
        </header>
    )
}

export default Header;