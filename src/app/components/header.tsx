import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        <Link className='text-2xl font-extrabold text-white' href='/'>
          devstore
        </Link>
      </div>

      <form className='flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700'>
        <Search className='h-5 w-5 text-zinc-500' />
        <input
          className='outiline-none flex-1 bg-transparent text-sm placeholder:text-zinc-500 '
          placeholder='Buscar Pordutos...'
        />
      </form>

      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
          <ShoppingBag className='h-4 w-4' />
          <span>Carrinho (0)</span>
        </div>
        
          
        <div className='w-px h-4 bg-zinc-700'/>

        <Link href='/' className='flex items-center gap-2 hover:underline'>
          <span>Conta</span> 
          <Image
            src='https://github.com/savinnsk.png'
            className='h-6 w-6 rounded-full'
            width={24}
            height={24}
            alt=''
          />
        </Link>
      </div>
    </div>
  );
}
