import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import Image from 'next/image';
import logoImg from 'public/n-logo.png';
const ITEMS = ['about', 'skills', 'works', 'contact'];
// コンポーネント名は常に大文字で始めてください。
export const Header = () => {
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <header className='w-screen sm:h-16'>
      <div className='flex sm: h-full justify-between items-center lg:px-8 sm:px-2 lg:py-6 sm:py-1 shadow-md'>
        <h1>
          <Link href='/'>
            <a>
              {/* Next.js では public フォルダに入っている画像ファイルは/から書き始めてファイルを読み込み */}
              <Image src={logoImg} alt='N.create' width='120' height='35' placeholder='blur' />
            </a>
          </Link>
        </h1>
        <nav className='sm:text-sm'>
          <ul className='flex text-text-green'>
            {ITEMS.map((item) => {
              return (
                <li key={item} className='lg:mr-4 sm:mr-2 last:mr-0 cursor-pointer'>
                  <Scroll to={item} smooth={true} duration={600} className='uppercase'>
                    {item}
                  </Scroll>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
