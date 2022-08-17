import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'

export default function Card({client,image}){
  return <div className="flex items-center justify-between px-4 py-2 text-white duration-200 rounded-lg shadow-lg cursor-pointer bg-slate-500 hover:bg-slate-700">
    <div>
      <Link href={`/client/${client.id}`}>
        <a className='flex flex-col gap-1 p-1'>
          <div className='flex items-center gap-2 text-sm'>
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
        </a>
      </Link>
    </div>
    <div className='relative w-24 h-24'>
      <Image 
        src={image}
        layout='fill'
        objectFit='cover'
        className='rounded-full'
      />
    </div>
  </div>
}