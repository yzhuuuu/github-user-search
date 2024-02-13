import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useState } from 'react';
import useUserStore from '../store';
function SearchBar() {
  const setSearchUser = useUserStore((state) => state.setSearchUser);
  const searchUser = useUserStore((state) => state.searchUser);
  const [inputValue, setInputValue] = useState(searchUser);

  return (
    <div
      className={'flex items-center space-x-2 place-self-center mb-[1.25rem]'}
    >
      <input
        className={
          'bg-base-300 text-primary focus:outline-none focus:ring focus:ring-2 rounded-2xl p-2 w-[15rem] placeholder:text-info'
        }
        type='text'
        placeholder={'please enter user name '}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div
        onClick={() => {
          setSearchUser(inputValue);
        }}
      >
        <FaMagnifyingGlass
          className={
            'justify-self-end text-accent cursor-pointer hover:text-primary transition-colors'
          }
        />
      </div>
    </div>
  );
}

export default SearchBar;
