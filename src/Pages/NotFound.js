// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DIV = styled.div`
    padding: 300px;
    justify-content: center;
    align-items: center;
    display: grid;
    gap: 50px;

    .text {
        color: grey;
        font-size: 50px;
    }
    .back {
        text-decoration: none;
        font-size: 30px;
        color: grey;
        cursor: pointer;
    }
`;

const NotFound = () => {
    return (
        <DIV>
            <p className="text">Not found</p>

            {/* <Link to="/" className="back">
                Go Back Home
            </Link> */}
        </DIV>
    );
};

export default NotFound;
