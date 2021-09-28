import React, { useState } from 'react'

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [pending , setPending]  = useState(null) 
  const [sortpages, setsortpages] = useState('difficulty') 
  
  const state = {
    pending,
    sortpages,
    changePendingTo: setPending,
    changeSortTo: setsortpages
  }

  return(
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
