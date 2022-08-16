import Card from '../components/Card'
import Head from 'next/head'

export default function Home({clients}) {
  return <>
    <Head>
      <title>Contact List</title>
    </Head>
    <div>
      <h1 className='mb-5 text-4xl'>Contact List</h1>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
        {clients.map(client=><Card key={client.id} client={client}/>)}
      </div>
    </div>
  </>
}

export async function getStaticProps(){
  let clients = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
  return {
    props: { clients }
  }
}