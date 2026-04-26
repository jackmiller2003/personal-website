import { type ReactNode } from 'react'
import Header from './Header'

interface PostLayoutProps {
  children: ReactNode
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <>
      <Header />
      <main id="content" style={{ paddingTop: '36px' }}>
        {children}
      </main>
    </>
  )
}
