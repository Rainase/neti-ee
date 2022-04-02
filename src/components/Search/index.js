import { useState } from 'react';

const Search = () => {
  const [searchSelected, setSearchSelected] = useState('Neti');
  return (
    <div className='flex container mx-auto items-end my-5'>
      <div className=' font-[800] text-5xl mr-3 leading-[0.76] select-none text-[#2875BC] hidden sm:block'>
        NETI
      </div>
      <div className='flex flex-col mx-2'>
        <div className='flex space-x-2 text-sm my-1.5'>
          <div className={`${searchSelected === 'Neti' ? 'text-[#2875BC]' : 'text-gray-800'}`}
          onClick={(e) => setSearchSelected(e.target.innerText)}>Neti</div>
          <div className={`${searchSelected === 'Google' ? 'text-[#2875BC]' : 'text-gray-800'}`} onClick={(e) => setSearchSelected(e.target.innerText)}>
            Google
          </div>
          <div className={`${searchSelected === 'Ajalehed' ? 'text-[#2875BC]' : 'text-gray-800'}`} onClick={(e) => setSearchSelected(e.target.innerText)}>
            Ajalehed
          </div>
          <div className={`${searchSelected === 'Sõnastikud' ? 'text-[#2875BC]' : 'text-gray-800'}`} onClick={(e) => setSearchSelected(e.target.innerText)}>
            Sõnastikud
          </div>
          <div className={`${searchSelected === 'Wikipedia' ? 'text-[#2875BC]' : 'text-gray-800'}`} onClick={(e) => setSearchSelected(e.target.innerText)}>
            Wikipedia
          </div>
          <div className={`${searchSelected === 'Videod' ? 'text-[#2875BC]' : 'text-gray-800'}`} onClick={(e) => setSearchSelected(e.target.innerText)}>
            Videod
          </div>
          <div className={`${searchSelected === 'Muud' ? 'text-[#2875BC]' : 'text-gray-800'}`} onClick={(e) => setSearchSelected(e.target.innerText)}>Muud</div>
        </div>
        <div className='left-point'></div>
        <div className='flex border border-[#2875BC]/50 items-center w-max'>
          <input className='px-2 outline-none' placeholder={searchSelected} />
          <span className='text-gray-100 hidden sm:block'>|</span>
          <div className='mx-2 hidden sm:block'>📍</div>
          <span className='text-gray-100 hidden sm:block'>|</span>
          <div className='mx-2 hidden sm:block'>⌨️</div>
          <span className='text-gray-100'>|</span>
          <select className='mx-2 outline-none bg-transparent'>
            <option>Veeb</option>
            <option>Asukoht</option>
          </select>
          <button className='px-4 text-center py-1 border-none bg-[#2875BC]'>🔍</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
