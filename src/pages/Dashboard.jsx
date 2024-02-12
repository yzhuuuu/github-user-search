import FollowerList from '../components/FollowerList.jsx';
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
      <div className='grid grid-cols-2 gap-x-4 mt-4 max-h-64'>
        {data && <UserDetails {...data} />}
        {data && <FollowerList url={data.followers_url} />}
      </div>
    </>
  );
}

export default Dashboard;
