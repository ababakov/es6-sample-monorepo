import React from 'react'

export default function SharedComponent() {
  let hello = 'world';

  return <div>
    My shared content! 
    <div>
      {hello}
    </div>
  </div>
}
