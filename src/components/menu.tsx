import { Profile } from './profile'

export const Menu = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Profile />
      </div>
    </div>
  )
}
