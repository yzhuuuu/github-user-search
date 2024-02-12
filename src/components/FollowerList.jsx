import fetcher from '../utils/fetcher';
import useSWR from 'swr';

function FollowerList({ url }) {
  const { data, error } = useSWR(url, fetcher);
  if (error) {
    return <p>error</p>;
  }
  if (!data || data.length === 0) {
    return <p>No Followers Found</p>;
  }
  return (
    <div className='relative'>
      <div className="bg-base-300 p-[1.75rem] rounded-md  before:content-['Followers'] before:absolute before:top-0 before:left-0 before:bg-base-300 before:px-4 before:text-accent space-y-4 overflow-y-scroll h-[20rem] before:-translate-y-5">
        {data.map((follower) => {
          return (
            <div key={follower.id} className='flex space-x-4'>
              <div className='avatar'>
                <div className='w-12 rounded-full'>
                  <img src={follower.avatar_url} />
                </div>
              </div>
              <div className='capitalize font-lato'>
                <h4 className='font-bold'>{follower.login}</h4>
                <a
                  href={follower.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='normal-case hover:text-accent transition-colors'
                >
                  {follower.html_url}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FollowerList;
