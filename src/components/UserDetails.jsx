import Avartar from './Avartar';
import { HiMiniLink } from 'react-icons/hi2';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { MdLocationPin } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function UserDetails({
  avatar_url,
  html_url,
  name,
  company,
  location,
  blog,
  login,
  twitter_username,
  bio,
}) {
  return (
    <article className="bg-base-300 p-[1.25rem] rounded-md relative before:content-['User'] before:absolute before:-top-6 before:left-0 before:bg-base-300 before:px-4 before:text-accent">
      <Avartar
        avatar_url={avatar_url}
        name={name}
        login={login}
        twitter_username={twitter_username}
        html_url={html_url}
      />
      <p>{bio}</p>

      <div className='mt-4 capitalize'>
        <h4 className='flex items-center space-x-2'>
          <HiOutlineBuildingOffice />
          {company}
        </h4>
        <h4 className='flex items-center space-x-2'>
          <MdLocationPin />
          {location}
        </h4>
        <a
          href={`https://${blog}`}
          className={
            'normal-case flex items-center space-x-2 hover:text-accent transition-colors'
          }
        >
          <HiMiniLink />

          {blog}
        </a>
      </div>
    </article>
  );
}

export default UserDetails;
