import { ReactNode } from 'react'
import Header from '../organism/Header.tsx'
import Footer from '../organism/Footer.tsx'

type Props = {
    children: ReactNode;
}

const MainLayout = ( { children }: Props) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout