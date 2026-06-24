'use client'

type StoryLabelProps = {
  storyNumber: number
  onJump?: () => void
}

export function StoryLabel({ storyNumber, onJump }: StoryLabelProps) {
  return (
    <button
      className="absolute left-4 top-4 z-10 transition-opacity hover:opacity-60 active:opacity-40"
      style={{
        fontFamily: 'var(--font-jakarta), -apple-system, sans-serif',
        fontWeight: 800,
        fontSize: '18px',
        textTransform: 'uppercase',
        letterSpacing: '0.11em',
        color: '#4F8CFF',
        lineHeight: 1,
      }}
      onClick={(e) => { e.stopPropagation(); onJump?.() }}
      type="button"
    >
      STORY {storyNumber}
    </button>
  )
}
