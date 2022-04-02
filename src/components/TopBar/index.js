const TopBar = () => {
  const items = [
    {name: 'Neti.ee', link: 'https://www.neti.ee/'},
    {name: 'Postimees', link: 'https://www.postimees.ee/'},
    {name: 'Reklaam', link: 'https://reklaam.postimeesgrupp.ee/online/postimees-grupp/'},
    {name: 'Tellimine', link: 'https://tellimine.postimees.ee/'},
    {name: 'Ilmateade', link: 'https://ilmajaam.postimees.ee/'},
    {name: 'Online.ee', link: 'https://online.ee/'}
]
  return ( 
    <div className="flex w-full px-10 text-sm text-[#2875BC] py-1 shadow-md bg-[#2875BC] sm:bg-gray-50">
      <div className="hidden sm:block flex-1 space-x-5">
        {items.map(({name, link}) => (
          <a key={name} href={link}>{name}</a>
        ))}
      </div>
      <div className="hidden sm:block">
        <a href="https://www.neti.ee/cgi-bin/abi/browser.html#koduleht" alt='Neti avaleheks'>
          NETI avaleheks
        </a>
      </div>
      <div className="block sm:hidden font-[800] text-white text-2xl py-2">NETI<span className="text-sm">.ee</span></div>
    </div>
   );
}
 
export default TopBar;