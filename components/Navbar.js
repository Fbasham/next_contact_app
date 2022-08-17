import Link from "next/link"
import { AiOutlineHome, AiOutlineContacts, AiOutlineQuestionCircle } from 'react-icons/ai'

export default function Navbar(){
  return <nav className="flex items-center justify-between h-12 text-lg font-semibold text-white bg-slate-500">
    <div className="h-full px-4 pt-[12px] text-2xl duration-200 cursor-pointer hover:bg-slate-700">
      <Link href='/'>
        <a>
          <AiOutlineHome/>
        </a>
      </Link>
    </div>
    <div>
      <div className="font-bold">Next Contact App</div>
    </div>
    <div className="flex h-full">
      <Link href='/about'>
        <a>
          <div className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:bg-slate-700">
            <AiOutlineQuestionCircle />
            <div>About</div>
          </div>
        </a>
      </Link>
      <Link href='/contact'>
        <a>
          <div className="flex items-center gap-2 p-2 duration-200 cursor-pointer hover:bg-slate-700">
            <AiOutlineContacts />
            <div>Contact</div>
          </div>
        </a>
      </Link>
    </div>
  </nav>
}