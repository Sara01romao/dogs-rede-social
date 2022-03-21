import React from 'react'

export default function Error({error}) {
    if(!error) return null;

  return <p style={{color:'#fb1', margin:'1rem 0'}}>{error}</p>
}
