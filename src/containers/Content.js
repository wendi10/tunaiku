import React, { useState } from 'react'
import axios from 'axios'
import { useHttpRequest } from '../services/httpRequest'
import Card from '../components/Card'

export default function Content () {
  const [char, setChar] = useState([])

  const fetchedData = useHttpRequest(axios.get('https://swapi.co/api/films/'), [])

  const fetchingData = async (url) => {
    const result = await axios.get(url)
    setChar(data => [...data, result.data.name])
  }

  function getChar (eps) {
    fetchedData.results.map((data) => {
      if (data.episode_id === eps) {
        data.characters.map((char) => {
          fetchingData(char)
        })
      }
    })
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='content'>
          {
            fetchedData
              ? <>
                {
                  fetchedData.results.map((data, index) => {
                    return (
                      <div key={index} onClick={() => { getChar(data.episode_id) }}>
                        <Card data={data} index={index} char={char} getChar={getChar} />
                      </div>
                    )
                  })
                }
              </>
              : null
          }
        </div>
      </div>
    </div>
  )
}
