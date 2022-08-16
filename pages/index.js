import Card from '../components/Card'
import Head from 'next/head'

export default function Home({clients,images}) {
  return <>
    <Head>
      <title>Contact List</title>
    </Head>
    <div className='max-w-5xl mx-auto'>
      <h1 className='mb-5 text-4xl'>Contact List</h1>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3'>
        {clients.map((client,i)=><Card key={client.id} client={client} image={images[i].picture.large}/>)}
      </div>
    </div>
  </>
}

export async function getStaticProps(){
  let clients = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
  let images = await (await fetch('https://randomuser.me/api/?results=10')).json().then(e=>e.results)
  return {
    props: { clients, images }
  }
}