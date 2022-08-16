export default function Footer(){
  let year = new Date().getFullYear()
  return <footer className="p-2 text-sm text-center">
    &copy; {year} Frank Basham
  </footer>
}