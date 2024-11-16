import React from 'react';
import styled from 'styled-components';
import MediaGrid from '../Components/MediaGrid';
import Profile from '../Components/profile';
import { teamMembers } from '../data';

const DIV = styled.div`
    .display {
        width: 100%;
        height: 300px;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        filter: brightness(0.8);
    }

    .cent-img {
        width: 250px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px; /* Spacing between each section */
        padding-top: 50px;
        margin-bottom: 50px;
        width: 90%;
        margin: auto;
    }
    .section {
        width: 50%;
        padding: 30px;
        border-radius: 15px;
    }

    .company-overview {
        background-color: #f0f8ff; /* Light blue */
        margin-right: auto;
    }

    .empowering-entrepreneurs {
        background-color: #f5f5dc; /* Beige */
    }

    .vision-statement {
        background-color: #f0fff0; /* Honeydew (light green) */
        margin-left: auto;
    }

    .mission-statement {
        background-color: #fffaf0; /* Floral white (soft cream) */
        margin-right: auto;
    }

    h2 {
        font-size: 1.8rem;
        color: #555;
        margin-bottom: 10px;
        text-align: center;
    }

    .info {
        font-size: 20px;
        line-height: 1.6;
        color: #666;
        /* text-align: justify; */
        text-align: left;
    }
    ul {
        padding-left: 20px;
        margin-top: 15px;
    }

    li {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #666;
        margin-bottom: 10px;
    }

    li strong {
        font-weight: bold;
    }
    .images {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 150px;
    }

    @media (max-width: 800px) {
        .section {
            width: 80%;
        }
    }
    .extras {
        background-color: #f4f4f4;
    }
    .extras2 {
        display: grid;
        /* grid-template-columns: repeat(auto-fit, minmax(390px, 1fr)); */
        gap: 10px;
        width: 100%;
        margin: auto;
        max-width: 1500px;
        padding: 20px;
    }

    .jjj {
        color: var(--app-color);
    }
`;

const Home = () => {
    return (
        <DIV>
            {/* <div className="display">
                <img src={logo} alt="cent" className="cent-img" />
            </div> */}

            <div className="content">
                <div className="section company-overview">
                    <h2>About Us</h2>
                    <p className="info">
                        Tu2minis Global Services is at the forefront of
                        management consulting, dedicated to driving exponential
                        growth and fostering resilience for entrepreneurs,
                        organizations, and communities worldwide. Our mission is
                        to be the catalyst for transformation, guiding our
                        clients through an evolving business landscape to
                        achieve extraordinary success.
                    </p>
                </div>

                {/* <div className="section empowering-entrepreneurs">
                    <h2>Empowering Entrepreneurs</h2>
                    <p className="info">
                        At Tu2minis Global Services, we recognize the pivotal
                        role entrepreneurs play in shaping the future. Our
                        approach to entrepreneurship development is
                        comprehensive and dynamic.
                    </p>
                    <ul>
                        <li>
                            <strong>Personalized Mentorship:</strong> We offer
                            one-on-one guidance to entrepreneurs, helping them
                            navigate challenges, seize opportunities, and refine
                            their business strategies.
                        </li>
                        <li>
                            <strong>Capacity Building Programs:</strong>{' '}
                            Tailored workshops and training sessions are
                            designed to enhance the skills and knowledge of
                            entrepreneurs, from startup basics to advanced
                            business management.
                        </li>
                    </ul>
                </div> */}

                <div className="section vision-statement">
                    <h2>Vision Statement</h2>
                    <p className="info">
                        To be the premier global partner for entrepreneurial
                        success, empowering organizations to achieve excellence,
                        innovation, and sustainable growth, while fostering a
                        culture of collaboration, continuous learning, and
                        social responsibility.
                    </p>
                </div>

                <div className="section mission-statement">
                    <h2>Mission Statement</h2>
                    <p className="info">
                        To ignite the entrepreneurial spirit, foster innovative
                        solutions, and provide expert guidance, transforming
                        organizations and entrepreneurs to achieve exceptional
                        performance, operational excellence, and lasting impact
                        through cutting-edge management consulting, training,
                        and innovation strategies.
                    </p>
                </div>
            </div>

            <div className="images">
                <h2 className="jjj">PROFILE OF FACULTY</h2>

                {/* <Profile /> */}
                <Profile
                    image={teamMembers[0].image}
                    role={teamMembers[0].role}
                    name={teamMembers[0].name}
                    more={teamMembers[0].more}
                    story={teamMembers[0].story}
                    isReversed={teamMembers[0].isReversed}
                    paragraph={teamMembers[0].paragraph}
                />

                <div className="extras">
                    <div className="extras2">
                        {teamMembers.slice(1).map((data, index) => (
                            <Profile
                                key={data.id}
                                image={data.image}
                                role={data.role}
                                name={data.name}
                                more={data.more}
                                story={data.story}
                                isReversed={data.isReversed}
                                paragraph={data.paragraph}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <MediaGrid
                title="Women Entrepreneurship Workshop (Day 1)"
                folderKey="day1"
            />
            <MediaGrid
                title="Women Entrepreneurship Workshop (Day 2)"
                folderKey="day2"
            />
            <MediaGrid
                title="Summer Squeeze Organic Juice Training, July - August 2024."
                folderKey="summer"
            />

            <MediaGrid
                title="Excursion - Blooming Heritage Schools Lokogoma Abuja Year 6. 2023 / 2024 Academic session."
                folderKey="excursion"
            />
            <MediaGrid title="Reviews" folderKey="reviews" />
        </DIV>
    );
};

export default Home;
