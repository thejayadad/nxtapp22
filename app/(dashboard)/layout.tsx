import React from 'react'
import Navigation from './dashboard/_components/navigation/navigation';
import Header from './dashboard/_components/header/header';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='h-full flex'>
      <Navigation />
      <main className='flex-1 h-full overflow-y-auto'>
        <Header />
      {children}
      </main>
    </div>
  )
}

export default layout