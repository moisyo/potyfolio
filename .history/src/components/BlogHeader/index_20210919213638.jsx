import Link from 'next/link';
import Image from 'next/image';
import { Link as Scroll } from 'react-scroll';
import logoImg from 'public/n-logo.png';
const ITEMS = ['about', 'skills', 'works', 'contact'];
// コンポーネント名は常に大文字で始めてください。
export const BlogHeader = () => {
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <header className='w-screen'>
      <div className='flex sm:flex-col h-full justify-between items-center lg:px-8 sm:px-2 lg:py-6 sm:py-3 shadow-md'>
        <h1>
          <Link href='/'>
            <a>
              {/* Next.js では public フォルダに入っている画像ファイルは/から書き始めてファイルを読み込み */}
              <Image src={logoImg} alt='N.create' width='120' height='35' placeholder='blur' />
            </a>
          </Link>
        </h1>
        <nav className='sm:text-sm sm:mt-3'>
          <ul className='flex text-text-green'>
            {ITEMS.map((item) => {
              return (
                <li key={item} className='mr-4 last:mr-0 cursor-pointer'>
                  <Link href={`/#${item}`}>
                    <Scroll to={item} smooth={true} duration={600} className='uppercase'>
                      {item}
                    </Scroll>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
