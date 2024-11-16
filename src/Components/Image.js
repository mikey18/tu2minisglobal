import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

const DIV = styled.div`
    margin: auto;
    width: 300px;
    display: grid;
    gap: 10px;
    aspect-ratio: 1/1;

    .image {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 500px;
        aspect-ratio: 1/1;
    }
    .name {
        font-weight: bold;
        color: black;
        text-align: center;
    }
    .role {
        color: var(--app-color);
    }
    .more {
        color: grey;
    }
`;

const Image = ({ image, role, name, more }) => {
    return (
        <DIV>
            <LazyLoadImage
                className="image"
                src={image}
                effect="black-and-white"
            />
            <p className="name role">{role.toUpperCase()}</p>
            <p className="name">{name.toUpperCase()}</p>
            <p className="name more">{more.toUpperCase()}</p>
        </DIV>
    );
};

export default Image;
