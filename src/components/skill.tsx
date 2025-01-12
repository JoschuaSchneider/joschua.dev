import { twMerge } from 'tailwind-merge'

type SkillProps = {
  title: string
  since: number
  mode?: "since" | "absolute"
  plus?: boolean
  className?: string
}

export const getYearDifference = (since: number) => {
  return Math.max(1, 2025 - since)
}

export const Skill = ({
  title,
  since,
  mode = "since",
  plus = true,
  className = 'text-black border border-gray-200',
}: SkillProps) => (
  <div className={twMerge('grid grid-cols-2 px-5 py-3 rounded-md', className)}>
    <p className="grid col-span-1 text-lg font-bold">{title}</p>
    <span className="grid self-center col-span-1 px-2 text-right">
      {mode === "since" ? getYearDifference(since) : since}y{plus ? '+' : ''}
    </span>
  </div>
)
