import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <div className='grid-rows-6 grid max-h-[860px] grid-cols-9 gap-6'>
      <Link
        href='/'
        className='group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900'
      >
        <Image
          className='mt-auto transition-transform duration-500 group-hover:scale-105'
          src='/moletom-ai-side.png'
          width={920}
          height={920}
          quality={100}
          alt=''
        />

        <div className='absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
          <span className='truncate text-sm'>Moleton AI Side</span>
          <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
            R$129
          </span>
        </div>
      </Link>
      <Link
        href='/'
        className='group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 '
      >
        <Image
          className='mt-auto transition-transform duration-500 group-hover:scale-105'
          src='/moletom-java.png'
          width={920}
          height={920}
          quality={100}
          alt=''
        />
        <div className='absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
          <span className='truncate text-sm'>Moleton AI Side</span>
          <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
            R$129
          </span>
        </div>
      </Link>

      <Link
        href='/'
        className='group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900'
      >
        <Image
          className='mt-auto transition-transform duration-500 group-hover:scale-105'
          src='/moletom-never-stop-learning.png'
          width={920}
          height={920}
          quality={100}
          alt=''
        />
        <div className='absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5'>
          <span className='truncate text-sm'>Moleton AI Side</span>
          <span className='flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold'>
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}
