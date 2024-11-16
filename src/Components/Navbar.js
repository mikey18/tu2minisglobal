import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import cmd from '../assets/cmd.png';

const DIV = styled.div`
    padding: 15px;
    /* box-shadow: 0px 11px 18px 3px var(--soft-color2); */
    /* border-bottom: 1px solid lightgrey; */
    display: flex;
    justify-content: space-around;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    .logo-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 230px;
    }
    .logo {
        width: 100%;
        cursor: pointer;
    }
    .cmd {
        width: 50px;
        height: 50px;
    }
    .cmd {
        display: flex;
        max-width: 800px;
        margin: auto;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 90%;
    }
    .cmd-image {
        width: 55px;
    }
`;

const Navbar = () => {
    const navigate = useNavigate();

    const nav = () => {
        navigate('/');
    };
    return (
        <DIV>
            <div className="logo-div" onClick={nav}>
                <img src={logo} alt="tu2minis" className="logo" />
            </div>
            <div className="cmd">
                <div>
                    <img src={cmd} alt="cmd" className="cmd-image" />
                </div>
                <div>
                    <h3>CMD Accredited Management Trainers</h3>
                </div>
            </div>
        </DIV>
    );
};

export default Navbar;
