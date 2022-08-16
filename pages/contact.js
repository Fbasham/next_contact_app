import Head from "next/head"

export default function Contact(){
  return <>
    <Head>
      <title>Contact</title>
    </Head>
    <div className='max-w-4xl mx-auto'>
      <h1 className='mb-5 text-4xl'>Contact</h1>
      <form>
        <div className="flex flex-col gap-2">
          <label htmlFor='name'>Name</label>
          <input id='name' name='name' className="px-2 py-1 border-2 rounded-md border-slate-500"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' className="px-2 py-1 border-2 rounded-md border-slate-500"></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor='question'>Question</label>
          <textarea id='question' name='question' className="px-2 py-1 border-2 rounded-md border-slate-500"></textarea>
        </div>
        <div className='flex justify-center'>
          <button className="p-1 mt-2 text-white duration-200 rounded-md bg-slate-500 hover:bg-slate-700" onClick={e=>e.preventDefault()}>Submit</button>
        </div>
      </form>
    </div>
  </>
}