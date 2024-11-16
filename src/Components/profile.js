import styled from 'styled-components';
import Image from './Image';
import { useRef } from 'react';

const DIV = styled.div`
    .profile {
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 1500px;
        margin: auto;
        width: 90%;
        gap: 20px;
    }

    .ooo {
        width: 40%;
    }
    .details {
        width: 60%;
    }
    @media (max-width: 800px) {
        .profile {
            flex-direction: column;
        }
        .ooo {
            width: 100%;
        }
        .details {
            width: 100%;
        }
    }
    .custom-modal {
        padding: 20px;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        max-width: 1000px;
        margin: auto;
        width: 90%;
    }

    .custom-modal::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
    .paragraph {
        margin-bottom: 1.5em; /* Adjust the margin as needed */
    }
    .butt-wrap {
        display: flex;
        justify-content: right;
    }
    .butt {
        background-color: var(--app-color);
        padding: 10px;
        padding: 8px;
        border: none;
        color: white;
        border-radius: 8px;
        cursor: pointer;
    }
`;

const Profile = ({ image, role, name, more, paragraph, story }) => {
    const paragraphs = story.trim().split('\n\n');

    const dialogRef = useRef(null);

    // Function to open the modal
    const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    // Function to close the modal
    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <DIV>
            <dialog ref={dialogRef} className="custom-modal">
                <div className="butt-wrap">
                    <button onClick={closeModal} className="butt">
                        Close
                    </button>
                </div>

                {paragraphs.map((paragraph, index) => (
                    <p className="paragraph" key={index}>
                        {paragraph}
                    </p>
                ))}
            </dialog>
            <div className="profile">
                <div className="ooo">
                    <Image image={image} role={role} name={name} more={more} />
                </div>

                <div className="details">
                    {paragraphs.slice(0, paragraph).map((paragraph, index) => (
                        <p className="paragraph" key={index}>
                            {paragraph}
                        </p>
                    ))}
                    <button className="butt" onClick={openModal}>
                        Read more
                    </button>
                </div>
            </div>
        </DIV>
    );
};

export default Profile;
