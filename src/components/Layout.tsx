import { type ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="page-body">
        <Sidebar />
        <main id="content">
          {children}
        </main>
      </div>
    </>
  )
}
