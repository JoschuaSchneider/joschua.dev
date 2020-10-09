import clsx from 'clsx'

type Props = {
  title: string
  since: number
  plus?: boolean
  className?: string
}

export const getYearDifference = (since: number) => {
  return Math.max(1, new Date().getFullYear() - since)
}

const Skill = ({
  title,
  since,
  plus = true,
  className = 'text-black border border-gray-200',
}: Props) => (
  <div className={clsx('grid grid-cols-2 px-5 py-3 rounded-md', className)}>
    <p className="grid col-span-1 text-lg font-bold">{title}</p>
    <span className="grid self-center col-span-1 px-2 text-right">
      {getYearDifference(since)}y{plus && '+'}
    </span>
  </div>
)

export default Skill
