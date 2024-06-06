import { Link } from 'wouter';

export default function Nav() {

    return (
        <nav className='absolute top-0 right-0 mr-3 mt-3'>
        <ul className='flex'>
            <li className='mr-3'><Link href='/'>Home</Link></li>
            <li className='mr-3'><Link href='/projects'>Projects</Link></li>
            <li className='mr-3'><Link href='/about'>About</Link></li>
            <li className='mr-3'><Link href='/contact'>Contact</Link></li>
        </ul>
    
    </nav>

    );
   
}