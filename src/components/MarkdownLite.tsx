import React from 'react'
import Link from 'next/link'

const MarkdownLite = ({ text }: { text: string }) => {
  const linkRegex = /\[(.+?)\]\((.+?)\)/g
  const parts = []

  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match
    const matchStart = match.index
    const matchEnd = matchStart + fullMatch.length

    if (lastIndex < matchStart) {
      parts.push(text.slice(lastIndex, matchStart))
    }

    parts.push(
      <Link
        target='_blank'
        rel='noopener noreferrer'
        className='break-words underline underline-offset-2 text-blue-600'
        key={linkUrl}
        href={linkUrl}>
        {linkText}
      </Link>
    )

    lastIndex = matchEnd
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </>
  )
}

export default MarkdownLite

// You can download a library to do this but it would add to the bundle size as it would be dpone on the client side.
//Its always better to do it on the server side as we are onling displaying links
//Doing it on the server side is more performant one
