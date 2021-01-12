import React from 'react';
import Results from './Results'
const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div>
        <input type="submit" value="Search" onClick={onClick} />
        { showResults ? <Results /> : null }
      </div>
    )
  }
  export default Search;
  
//potentially rewrite this as a component...