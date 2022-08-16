import Link from "next/link"
import { AiOutlineHome, AiOutlineContacts, AiOutlineQuestionCircle } from 'react-icons/ai'

export default function Navbar(){
  return <nav className="flex items-center justify-between h-12 p-2 text-lg font-semibold text-white bg-slate-500">
    <div className="px-4 py-2 text-2xl duration-200 cursor-pointer hover:bg-slate-700">
      <Link href='/'>
        <AiOutlineHome />
      </Link>
    </div>
    <div>
      <div className="font-bold">Next Contact App</div>
    </div>
    <div className="flex gap-4">
      <Link href='/about'>
        <div className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:bg-slate-700">
          <AiOutlineQuestionCircle />
          <div>About</div>
        </div>
      </Link>
      <Link href='/contact'>
        <div className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:bg-slate-700">
          <AiOutlineContacts />
          <div>Contact</div>
        </div>
      </Link>
    </div>
  </nav>
}