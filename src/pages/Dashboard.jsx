import SearchBar from '../components/SearchBar.jsx';
import UserDetails from '../components/UserDetails.jsx';
import fetcher from '../utils/fetcher.js';
import useSWR from 'swr';
import useUserStore from '../store.js';
function Dashboard() {
  const userName = useUserStore((state) => state.userName);
  const { data, error } = useSWR(
    `https://api.github.com/users/${'john-smilga'}`,
    fetcher
  );
  console.log(data, error);
  return (
    <>
      <SearchBar />
      <div className='grid grid-cols-2'>
        {data && <UserDetails {...data} />}
      </div>
    </>
  );
}

export default Dashboard;
