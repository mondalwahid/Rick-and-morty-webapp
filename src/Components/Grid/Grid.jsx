import React from 'react'
import Cards from './Cards/Cards'
import { useState } from 'react'
import { useGetCharactersByNameQuery } from '../../Redux/ApiSlices/characterApiSlice';
import PaginationComponent from './Pagination/Pagination';
import { MainGridContainer } from './styles';

const Grid = () => {
    const [page, setPage] = useState(1);
    const {data:characterData} = useGetCharactersByNameQuery({pageNumber:page});

    const handlePagination = (props, page) => {
    setPage(page);
    };

    

  return (
    <MainGridContainer>

    {/* Passing data as props  */}
    <Cards characterData={characterData} />

    {/* Pagination component below */}
    <PaginationComponent page={page} characterData={characterData} handlePagination={handlePagination} />

    </MainGridContainer>
  )
}

export default Grid