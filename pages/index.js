import {useState, useEffect} from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No movies data</p>

  return (
    <div>
      {
        data.map(x => (
          <p key={x.title+x.release_year}>{x.title}, {x.release_year}</p>
        ))
      }
    </div>
  )
}
