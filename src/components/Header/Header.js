
import { Link } from 'react-router-dom';
// import './Header.css'


const Header = () => {

    return (
        <div className="navbar glass text-grey-200   shadow-xl rounded-xl  indx mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             
            <li className='font-bold  font-serif'><Link to='/'>Home</Link></li>

            <li className='font-bold   font-serif'><Link to='/about'>About</Link></li>
            <li className='font-bold   font-serif'><Link to='/allproject'>All Projects</Link></li>


            <li className='font-bold  font-serif'><Link to='/blog'>Blog</Link></li>
            
            

             
            </ul>
          </div>
          < a href  className="text-white normal-case text-2xl font-bold flex d-flex font-serif fo">Juliana Tonu</a>
        </div>
        <div className="navbar-end hidden lg:flex fo2">
          <ul className="menu menu-horizontal p-0">
            
            <li className='font-bold text-white font-serif'><Link to='/'>Home</Link></li>

            <li className='font-bold text-white  font-serif'><Link to='/about'>About</Link></li>
            
            <li className='font-bold text-white  font-serif'><Link to='/allproject'>All Project</Link></li>

            

            <li className='font-bold text-white font-serif'><Link to='/blog'>Blog</Link></li>
       
          </ul>
        </div>
       
        
      </div>
    );
};

export default Header;