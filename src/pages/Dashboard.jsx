import FollowerList from '../components/FollowerList.jsx';
import Forks from '../components/Forks.jsx';
import Language from '../components/Language.jsx';
import SearchBar from '../components/SearchBar.jsx';
import UserDetails from '../components/UserDetails.jsx';
import WatchCount from '../components/WatchCount.jsx';
import fetcher from '../utils/fetcher.js';
import useSWR from 'swr';
import useUserStore from '../store.js';
function Dashboard() {
  const userName = useUserStore((state) => state.userName);
  const searchUser = useUserStore((state) => state.searchUser);
  const { data, error } = useSWR(
    `https://api.github.com/users/${searchUser || userName}`,
    fetcher
  );

  if (error)
    return <span className='loading loading-spinner loading-lg'></span>;
  if (!data)
    return <span className='loading loading-spinner loading-lg'></span>;
  if (data.message) {
    return (
      <div className='bg-base-300 w-[20rem] mx-auto h-[10rem] p-2 flex items-center justify-center '>
        <h2 className='font-lato text-xl font-bold'>Out of Limited Access</h2>
      </div>
    );
  }
  return (
    <>
      <SearchBar />
      <div className='grid grid-cols-2 gap-4 mt-4 max-h-64'>
        {data && <UserDetails {...data} />}
        {data && <FollowerList url={data.followers_url} />}
        {data && <Language url={data.repos_url} />}
        {data && <WatchCount url={data.repos_url} />}
        {data && <Forks url={data.repos_url} />}
      </div>
    </>
  );
}

export default Dashboard;
