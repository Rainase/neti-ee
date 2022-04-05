import { useState } from 'react';
import SearchOrigin from './SearchOrigin';
import { MapPin, Keyboard, Search as SearchIcon } from 'tabler-icons-react';
const Search = () => {
  const [searchSelected, setSearchSelected] = useState('Neti');
  const links = [
    'Neti',
    'Google',
    'Ajalehed',
    'Sõnastikud',
    'Wikipedia',
    'Videod',
    'Muud',
  ];
  return (
    <div className='container flex items-end mx-auto my-5'>
      <div className=' font-[800] text-5xl mr-3 leading-[0.76] select-none text-[#2875BC] hidden sm:block'>
        NETI
      </div>
      <div className='flex flex-col mx-2'>
        <div className='flex space-x-2 text-gray-800 my-1.5'>
          {links.map((link, index) => (
            <SearchOrigin
              key={index}
              link={link}
              isActive={link === searchSelected}
              onClick={(e) => setSearchSelected(e)}
            />
          ))}
        </div>
        <div className='left-point'></div>
        <div className='flex border border-[#2875BC]/50 items-center w-max'>
          <input className='px-2 outline-none' placeholder={searchSelected} />
          <span className='hidden text-gray-100 sm:block'>|</span>
          <div className='hidden mx-2 sm:block'>
            <MapPin size={20} className='text-gray-500' />
          </div>
          <span className='hidden text-gray-100 sm:block'>|</span>
          <div className='hidden mx-2 sm:block'>
            <Keyboard size={20} className='text-gray-500' />
          </div>
          <span className='text-gray-100'>|</span>
          <select className='mx-2 bg-transparent outline-none'>
            <option>Veeb</option>
            <option>Asukoht</option>
          </select>
          <button className='px-4 text-center py-1 border-none bg-[#2875BC]'>
            <SearchIcon size={20} className='text-white' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
