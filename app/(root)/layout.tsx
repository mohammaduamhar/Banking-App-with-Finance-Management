import SideBar from "@/components/SideBar";
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName :'Amhar', lastName :'Boxer'}
  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn}/>

  <div className="flex size-full flex-col">

    <div className="root-layout">
    <Image 
            src="/icons/pLogo.svg"
            width={40}
            height={40}
            alt="menu icon"
            className=" max-xl:size-14"
          />
         <div>
         <MobileNav user={loggedIn}/>
         </div>

    </div>
    {children}
  </div>

   
   </main>
  );
}
