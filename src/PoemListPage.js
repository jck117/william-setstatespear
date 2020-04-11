/* PoemListPage.js displays a short paragraph and an unordered list. It iterates over the POEMS 
array exported from poems.js, each of the poems is mapped to display a link. */

import React from 'react'
import POEMS from './poems'
import { Link } from 'react-router-dom'

export default function PoemListPage() {
  return (
    <>
      <p>Choose a poem from the list below.</p>
      <ul className='PoemList'>
        {POEMS.map(poem =>
          <li key={poem.id}>
            <Link to={`/poem/${poem.id}`}>
              {poem.title}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}
