import React from 'react'
import { useEpisodeDataQuery } from '../../../../Redux/ApiSlices/episodeApi';
import { CardContainer, CharacterImageContainer, CharacterDetailsContainer, StatusAndSpeciesContainer, StatusIcon, CardContentHeader, CardContentText } from './styles'

const Singlecharactercard = ({ name, image, status, species, gender, location, firstSeen, origin }) => {
    const { data: episodeData } = useEpisodeDataQuery({ episodeNumber: firstSeen.split('/').slice(-1)[0] })
    return (
            <CardContainer>

                {/* Character image below */}
                <CharacterImageContainer>
                    <img src={image} alt="Character-img" style={{ width: "100%" }} />
                </CharacterImageContainer>

                {/* Character details below */}
                <CharacterDetailsContainer>

                    {/* Name of the character Below */}
                    <h2 style={{ color: "#fff", marginBottom: 8 }}>
                        {name}
                    </h2>

                    {/* Status and spieces of the character below */}
                    <StatusAndSpeciesContainer>
                        <div style={{ display: "flex" }}>
                            <StatusIcon style={{ backgroundColor: status === "Alive" ? "green" : status === "unknown" ? "blue" : "red" }} />
                        </div>
                        <p style={{ margin: 0, color: "#fff" }}>{status} - {species}</p>
                    </StatusAndSpeciesContainer>

                    {/* Gender and origin */}
                    <div>
                        <p style={{ margin: "15px 0 5px 0", color: "#8d8d8e", }}>Gender:</p>
                        <h4 style={{ color: "#fff", marginTop: 5 }}>{gender}</h4>
                    </div>

                    {/*  */}

                    {/* Last known location of the character */}
                    <div>
                        <CardContentText>
                            Last Known Location:
                        </CardContentText>
                        <CardContentHeader>
                            {location}
                        </CardContentHeader>
                    </div>

                    {/* Character First seen in */}
                    <div>
                        <CardContentText>
                            First seen in:
                        </CardContentText>
                        <CardContentHeader>
                            {episodeData?.name}
                        </CardContentHeader>
                    </div>
                </CharacterDetailsContainer>
            </CardContainer>
    )
}

export default Singlecharactercard