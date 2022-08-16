import Link from 'next/link'
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'

export default function Card({client}){
  console.log(client)
  return <div className="flex flex-col gap-3 p-2 text-white duration-200 rounded-lg shadow-lg cursor-pointer bg-slate-500 hover:bg-slate-700">
    <Link href={`http://localhost:3000/client/${client.id}`}>
      <div>
        <div className='flex items-center gap-2'>
          <AiOutlineUser />
          <p>{client.name}</p>
        </div>
        <div className='flex items-center gap-2'>
          <AiOutlineMail />
          <p className='text-xs'>{client.email}</p>
        </div>
        <div className='flex items-center gap-2'>
          <AiOutlinePhone />
          <p className="text-xs">{client.phone}</p>
        </div>
      </div>
    </Link>
  </div>
}