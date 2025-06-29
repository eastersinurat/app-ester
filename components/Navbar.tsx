import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
   <nav className="navbar">
    <Link href="/">
    <div className="flex items-center gap-2.5 cursor-pointer">
        <Image 
            src="/images/logo.jpg" 
            alt="logo" 
            width={56} 
            height={55}
        />

    </div>
    </Link>
    <div className="flex items-center gap-8">
        {/* <p>Home</p>
        <p>Companions</p>
        <p>My Journey</p> */}
        <NavItems />
        <p>Sign In</p>
    </div>
   </nav>
  )
}

export default Navbar