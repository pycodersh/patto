type StoryProgressProps = {
  storyNumber: number
  onJump?: () => void
}

export function StoryProgress({ storyNumber, onJump }: StoryProgressProps) {
  return (
    <header className="flex items-center justify-center py-1">
      <button
        className="text-[1.15rem] font-bold text-[#1F2937] transition-colors hover:text-[#4F8CFF] active:text-[#4F8CFF]"
        onClick={onJump}
        type="button"
      >
        Story {storyNumber}
      </button>
    </header>
  )
}
