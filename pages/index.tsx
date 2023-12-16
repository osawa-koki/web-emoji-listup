import React from 'react'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { toast } from 'react-toastify'
import setting from '../setting'

interface Emoji {
  char: string
  unicode: string
  html: string
}

const emojis: Emoji[] = []

for (let i = 0x1F000; i <= 0x1FAFF; i++) {
  emojis.push({
    char: String.fromCodePoint(i),
    unicode: `U+${i.toString(16).toLocaleUpperCase()}`,
    html: `&#x${i.toString(16)};`
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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => {
            await navigator.clipboard.writeText(emoji.char)
            toast.success(<div className='d-flex justify-content-center align-items-center'>
              Copied! <span className='text-primary mx-2' style={{ fontSize: '1.5rem' }}>{emoji.char}</span> <span style={{ fontSize: '0.7rem' }}>({emoji.unicode} | {emoji.html})</span>
            </div>)
          }}
          >
            {emoji.char}
          </Card>
        ))}
      </div>
    </>
  )
}
