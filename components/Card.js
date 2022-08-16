import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'

export default function Card({client}){
  console.log(client)
  return <div className="flex flex-col gap-3 p-2 text-white rounded-lg shadow-lg bg-slate-500">
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
}