import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

const FilterProvider = ({children}) => {
  const [searchType, setSearchType] = useState('artist');
  const [genreFilters, setGenreFilters] = useState(null);
  const [decadeFilters, setDecadeFilters] = useState(null);

  return (
    <FilterContext.Provider
      value={{
        searchType,
        setSearchType,
        genreFilters,
        setGenreFilters,
        decadeFilters,
        setDecadeFilters,
      }}>
      {children}
    </FilterContext.Provider>
  )
};

export default FilterProvider