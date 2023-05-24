"use client"
import React, {useState} from 'react';
import FormSearch from '@/components/FormSearch';
import UserCardInfo from '@/components/UserCardInfo';
import { User } from '@/interface/User'

const Home = () => {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status != 200) {
      setUsuario(null);
      const data = await res.json()
      setError(data?.message);
      return;
    }
    setUsuario(await res.json());
    setError(null);
  };
  
  return (
    <>
      <FormSearch getUser={getUser} />      
      { usuario && <UserCardInfo usuario={usuario} /> }
      {error && (
        <div className="rounded-lg bg-red-500 p-4 text-white">{error}</div>
      )}
    </>
  )
}

export default Home