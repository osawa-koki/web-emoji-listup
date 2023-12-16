import React from 'react'
import Image from 'next/image'
import setting from '../setting'
import { Card } from 'react-bootstrap'

interface Emoji {
  char: string
  unicode: string
  html: string
}

const emojis: Emoji[] = []

for (let i = 0x1F000; i <= 0x1F900; i++) {
  emojis.push({
    char: String.fromCodePoint(i),
    unicode: i.toString(16),
    html: `&#x${i.toString(16)}`
  })
}

export default function Home (): React.JSX.Element {
  return (
    <>
      <div id='Index' className='d-flex flex-column align-items-center'>
        <h1>{setting.title}</h1>
        <Image id='Logo' className='mt-3 mw-100 border rounded-circle' width={100} height={100} src={`${setting.basePath}/tako.png`} alt='Logo' />
      </div>
      <hr />
      <div id='Emojis' className='d-flex flex-wrap justify-content-center'>
        {emojis.map((emoji, index) => (
          <Card key={index} style={{
            width: '100px',
            height: '100px',
            fontSize: '75px'
          }}
          className='d-flex justify-content-center align-items-center'
          onMouseOver={(event) => { event.currentTarget.classList.add('shadow-lg') }}
          onMouseOut={(event) => { event.currentTarget.classList.remove('shadow-lg') }}
          role='button'
          >
            {emoji.char}
          </Card>
        ))}
      </div>
    </>
  )
}
