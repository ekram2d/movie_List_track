import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const moviecart = useSelector((state: RootState) => state.movies.cart);

  const heroStyle = {
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(195,195,196,1) 6%, rgba(0,212,255,1) 100%)',
  };

  return (
    <div>
      <div style={heroStyle} className="navbar bg-slate-300  text-black rounded-xl  mb-4">
        <div className="navbar-start">
          <div className="dropdown bg-slate-300">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-300 rounded-box w-52">
              
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/'>Profile</NavLink></li>
            </ul>
          </div>
          <NavLink to={'/'} className="uppercase  font-bold text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  rounded-lg p-2 btn text-black ">Movies</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Profile</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end text-2xl font-mono me-2">
          {moviecart?.length >= 1 ? (
            <NavLink to='/mycart' className='flex justify-center items-center'>
              <FontAwesomeIcon icon={faEye} className="eye-icon" />
              {moviecart?.length}
            </NavLink>
          ) : " "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
