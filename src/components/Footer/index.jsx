import Image from 'next/image';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
const ITEMS = ['about', 'skills', 'values', 'future'];
// コンポーネント名は常に大文字で始めてください。
export const Footer = () => {
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <footer className='container p-4 max-w-full bg-bg-green'>
      <div className='flex justify-center'>
        <small className='text-white'>©︎N.create All Rights Reserved.</small>
      </div>
    </footer>
  );
};
