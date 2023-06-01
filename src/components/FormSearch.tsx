import React from 'react'
import SearchIcon from '@/components/icons/SearchIcon';

interface Props {
  getUser: (username: string) => Promise<void>;
};

const FormSearch = (props: Props): JSX.Element => {
  const { getUser } = props

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget?.username?.value;
    getUser(username);
  };

  return (
    <form 
    data-testid="search-form"
    onSubmit={handleSubmit} className='flex flex-wrap bg-white p-4 rounded-xl items-center mb-6 space-x-2 shadow-md dark:bg-blue-900 dark:shadow-none'>
          <span className='px-3'>
            <SearchIcon width={30} className='fill-sky-500'/>
          </span>
          <input
            name="username"
            type='text'
            className='flex-1 h-14 p-2 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white dark:placeholder:text-white'
            placeholder='Search github username' />
          <button className='bg-sky-500 rounded-lg p-4 text-white font-bold min-w-[80px]'>Search</button>
    </form>
  )
}

export default FormSearch