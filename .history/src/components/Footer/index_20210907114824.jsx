import Image from 'next/image';
import logoImg from 'public/logo.png';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
const ITEMS = ['about', 'skills', 'values', 'future'];
// コンポーネント名は常に大文字で始めてください。
export const Footer = () => {
  return (
    // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <footer className='container p-4 mx-auto'>
      <div className='flex justify-center'>
        <small>©︎test All Rights Reserved.</small>
      </div>
    </footer>
  );
};
