import Image from 'next/image';
import logoImg from 'public/n-logo.png';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
const ITEMS = ['about', 'skills', 'works', 'future'];
// コンポーネント名は常に大文字で始めてください。
export const Header = () => {
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <header className='container max-w-full'>
      <div className='flex justify-between items-center px-4 py-4 shadow-md'>
        <Link href='/'>
          <a>
            {/* Next.js では public フォルダに入っている画像ファイルは/から書き始めてファイルを読み込み */}
            <Image src={logoImg} alt='ロゴ' width='120' height='35' placeholder='blur' />
          </a>
        </Link>
        <nav>
          <ul className='flex text-text-green'>
            {ITEMS.map((item) => {
              return (
                <li key={item} className='mr-4 last:mr-0'>
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
