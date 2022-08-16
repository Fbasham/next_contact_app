export default function Client({ client }){
  return <div className="flex flex-col gap-3 m-5">
    <h1 className="text-4xl">{client.name}</h1>
    <h2 className="text-2xl text-pink-500">Contact Information</h2>
    <dl>
      <dt className="font-semibold text-md">Email</dt>
      <dd className="mb-2 text-sm">{client.email}</dd>
      <dt className="font-semibold text-md">Phone</dt>
      <dd className="mb-2 text-sm">{client.phone}</dd>
      <dt className="font-semibold text-md">Website</dt>
      <dd className="mb-2 text-sm">{client.website}</dd>
    </dl>
    <h2 className="text-2xl text-pink-500">Address</h2>
    <dl>
      <dt className="font-semibold text-md">Street</dt>
      <dd className="mb-2 text-sm">{client.address.street}</dd>
      <dt className="font-semibold text-md">Suite</dt>
      <dd className="mb-2 text-sm">{client.address.suite}</dd>
      <dt className="font-semibold text-md">City</dt>
      <dd className="mb-2 text-sm">{client.address.city}</dd>
    </dl>
    <h2 className="text-2xl text-pink-500">Company</h2>
    <dl>
      <dt className="font-semibold text-md">Name</dt>
      <dd className="mb-2 text-sm">{client.company.name}</dd>
      <dt className="font-semibold text-md">Catch Phrase</dt>
      <dd className="mb-2 text-sm">{client.company.catchPhrase}</dd>
      <dt className="font-semibold text-md">Mandate</dt>
      <dd className="mb-2 text-sm">{client.company.bs}</dd>
    </dl>
  </div>
}

export async function getStaticPaths(){
  let clients = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
  return {
    paths: clients.map(client=>({params: { id: client.id+'' }})),
    fallback: false
  }
}

export async function getStaticProps(context){
  const { id } = context.params
  let client = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
  return {
    props: { client }
  }
}