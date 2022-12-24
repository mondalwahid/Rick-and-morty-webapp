import React, { useState } from 'react'
import { MainContainer, MainGrid, InputContainer, Input } from './styles'
import Grid from '@mui/material/Grid';
import Singlecharactercard from './Singlecharactercard/Singlecharactercard';

const Cards = ({ characterData }) => {
    const [search, setSearch] = useState('');
    const handleCardSearchChange = (e) => {
        setSearch(e.target.value)
    };

    return (
        <>
            <MainContainer>
                <InputContainer>
                    <Input type="text" value={search} onChange={handleCardSearchChange} placeholder='Search a Character' />
                </InputContainer>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{ padding: "1rem" }}>
                    {characterData?.results.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())).map((e) => {
                        return (
                            <MainGrid key={e.id} item xs={12} sm={12} md={6} lg={3}>
                                <Singlecharactercard name={e.name} image={e.image} status={e.status} species={e.species} gender={e.gender} location={e.location.name} firstSeen={e.episode[0]} />
                            </MainGrid>
                        )
                    })}

                </Grid>
            </MainContainer>
        </>
    )
}

export default Cards