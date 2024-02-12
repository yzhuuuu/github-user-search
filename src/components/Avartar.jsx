import { NavLink } from 'react-router-dom';

function Avartar({ avatar_url, name, login, twitter_username, html_url }) {
  return (
    <div className='grid grid-cols-2 place-items-center'>
      <div className='flex items-center place-self-start space-x-3 font-lato'>
        <div>
          <div className='avatar'>
            <div className='w-14 rounded-full'>
              <img src={avatar_url} />
            </div>
          </div>
        </div>
        <h2 className='flex flex-col capitalize font-bold '>
          {name || login}
          <span className='text-sm font-light'>
            {'@ '}
            {twitter_username || 'unknown'}
          </span>
        </h2>
      </div>
      <div className='flex-auto justify-self-end'>
        <NavLink className={'btn btn-outline btn-sm '} to={html_url}>
          <h3>Follow</h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Avartar;
