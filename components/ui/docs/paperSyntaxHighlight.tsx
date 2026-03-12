import type { ReactNode } from 'react'

const KEYWORD_RE = /\b(import|export|const|let|var|return|function|type|interface|extends|from|if|else|switch|case|default|for|while|new|as)\b/g
const STRING_RE = /("[^"]*"|'[^']*'|`[^`]*`)/g

function renderLine(line: string): ReactNode[] {
  const commentIndex = line.indexOf('//')
  const code = commentIndex >= 0 ? line.slice(0, commentIndex) : line
  const comment = commentIndex >= 0 ? line.slice(commentIndex) : ''

  const segments: ReactNode[] = []
  let cursor = 0

  while (cursor < code.length) {
    STRING_RE.lastIndex = cursor
    KEYWORD_RE.lastIndex = cursor

    const stringMatch = STRING_RE.exec(code)
    const keywordMatch = KEYWORD_RE.exec(code)

    const nextMatch = [stringMatch, keywordMatch]
      .filter((match): match is RegExpExecArray => !!match)
      .sort((a, b) => a.index - b.index)[0]

    if (!nextMatch) {
      segments.push(
        <span key={`plain-${cursor}`} className="text-paper-base">
          {code.slice(cursor)}
        </span>
      )
      break
    }

    if (nextMatch.index > cursor) {
      segments.push(
        <span key={`plain-${cursor}`} className="text-paper-base">
          {code.slice(cursor, nextMatch.index)}
        </span>
      )
    }

    const token = nextMatch[0]
    const isString = nextMatch === stringMatch

    segments.push(
      <span
        key={`${isString ? 'string' : 'keyword'}-${nextMatch.index}`}
        className={isString ? 'text-accent-yellow' : 'text-ink-faint'}
      >
        {token}
      </span>
    )

    cursor = nextMatch.index + token.length
  }

  if (comment) {
    segments.push(
      <span key="comment" className="text-ink-medium">
        {comment}
      </span>
    )
  }

  return segments
}

export function PaperSyntaxHighlight({ code }: { code: string }) {
  const lines = code.split('\n')

  return (
    <>
      {lines.map((line, index) => (
        <div key={`${index}-${line}`} className="whitespace-pre">
          {renderLine(line)}
        </div>
      ))}
    </>
  )
}
