import React from 'react';
import styled from 'styled-components';
// import cmd from '../assets/cmd.png';
import { org_name } from '../App';

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <FooterContent>
                    <ContactInfo>
                        <ContactTitle>Get In Touch</ContactTitle>
                        <ContactEmail href="mailto:Info@tu2minisglobal.org">
                            Info@tu2minisglobal.org
                        </ContactEmail>
                        <ContactText>
                            For general inquiries and support, we are happy to
                            assist you.
                        </ContactText>
                    </ContactInfo>
                    <CareerInfo>
                        <ContactTitle>Careers</ContactTitle>
                        <ContactEmail href="mailto:Careers@tu2minisglobal.org">
                            Careers@tu2minisglobal.org
                        </ContactEmail>
                        <ContactText>
                            Explore exciting career opportunities and grow with
                            us.
                        </ContactText>
                    </CareerInfo>
                    <ContactDetails>
                        <ContactTitle>Contact Us</ContactTitle>
                        <ContactText>Phone: 08036781885</ContactText>
                        <ContactText>
                            Address: Pent City Estate Lokogoma, FCT Abuja.
                        </ContactText>
                    </ContactDetails>
                    {/* <ImageContainer>
                    <FooterImage src={cmd} alt="Footer Image" />
                </ImageContainer> */}
                </FooterContent>
            </div>
            <p>
                &copy; {new Date().getFullYear()} {org_name}{' '}
            </p>
        </FooterContainer>
    );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
    background-color: var(--app-color);
    padding: 80px 80px 20px 80px;
    color: #ffffff;
    font-family: Arial, sans-serif;
    margin-top: 150px;

    p {
        text-align: center;
        color: white;
    }
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 100px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

const ContactInfo = styled.div`
    text-align: center;
    max-width: 300px;
`;

const CareerInfo = styled(ContactInfo)``;

const ContactDetails = styled(ContactInfo)``;

const ContactTitle = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
`;

const ContactEmail = styled.a`
    color: #f1f1f1;
    text-decoration: none;
    font-size: 1.1em;
    margin-bottom: 5px;

    &:hover {
        color: #ffd700;
        text-decoration: underline;
    }
`;

const ContactText = styled.p`
    font-size: 1em;
    color: #d3d3d3;
    margin: 0;
`;

// const ImageContainer = styled.div`
//     flex-shrink: 0;
//     width: 150px;
//     text-align: center;
//     background-color: white;
//     border-radius: 50%;
// `;

// const FooterImage = styled.img`
//     width: 100%;
//     height: auto;
//     border-radius: 50%;
// `;
