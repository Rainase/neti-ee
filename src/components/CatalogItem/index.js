const CatalogItem = ({ title, items }, i) => {
  return (
    <div
      className='grid px-2 gap-2'
    >
      <div className='text-xl font-semibold text-[#2875BC] hover:underline w-max cursor-pointer'>{title}</div>
      <div className='flex pl-1 flex-wrap border-2 border-[#3599DA] border-r-0 border-b-0 border-t-0'>
        {items.map(({ name, link }) => (
          <div className='mx-1' key={link}>
            <div className='text-sm sm:text-md text-gray-700 hover:underline cursor-pointer'>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogItem;
