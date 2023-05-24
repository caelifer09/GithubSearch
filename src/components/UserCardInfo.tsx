import React from 'react'
import Image from "next/image";
import LogoIcon from '@/components/icons/LogoIcon'
import LocationIcon from '@/components/icons/LocationIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import ChainIcon from '@/components/icons/ChainIcon'
import BuildIcon from '@/components/icons/BuildIcon'
import { User } from '@/interface/User'

interface Props {
  usuario: User
}

function valideURL(url: string) {
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  return url;
}

const UserCardInfo = ({ usuario }: Props) => {
  return (
    <article className='grid-areas p-4 rounded-xl bg-white shadow-md px-4 dark:bg-blue-900 dark:text-white dark:shadow-none'>
      <div className='section-logo bg-gray-200 grid place-content-center rounded-full w-24 h-24 mr-3 md:mr-10 lg:mx-auto overflow-hidden'>
      <Image
          src={usuario.avatar_url}
          width={96}
          height={96}
          alt={`profile img user ${usuario.name}`}
          className="rounded-full"
        />
      </div>
      <div className='section-title'>
        <h2 className='font-bold text-3xl'>{usuario.name || "Not Information"}</h2>
        <p>@{usuario.login}</p>
      </div>
      <p className='section-date lg:text-right text-sm'>
      {new Date(usuario.created_at || "").toLocaleDateString("es", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className='section-description mt-8 items-center leading-loose'>{usuario.bio || "Sin user bio"}</p>
      <div className='section-number flex justify-around bg-blue-50 rounded-xl mt-4 p-8 text-center text-blue-950 dark:bg-blue-950 dark:text-white'>
        <article>
          <p>repos</p>
          <p className='font-bold text-xl'>{usuario.public_repos}</p>
        </article>
        <article>
          <p>followers</p>
          <p className='font-bold text-xl'>{usuario.followers}</p>
        </article>
        <article>
          <p>following</p>
          <p className='font-bold text-xl'>{usuario.following}</p>
        </article>
      </div>
      <div className='section-social md:grid md:grid-cols-2 mt-4 text-center space-y-3'>
        <article className='flex items-center gap-2'>
          <p>
            <LocationIcon className="h-full w-full fill-blue-950 dark:fill-white" width={"1rem"} />
          </p>
          <p>{usuario.location || "Not Information"}</p>          
        </article>
        <article className='flex items-center gap-2'>
          <p>
            <ChainIcon className="h-full w-full fill-blue-950 dark:fill-white" width={"1rem"} />
          </p>
          <a
            href={valideURL(usuario.blog)}
            target='blank'
            className="truncate"
          >
            {usuario.blog || "Not Information"}
          </a>          
        </article>
        <article className='flex items-center gap-2'>
          <p>
            <TwitterIcon className="h-full w-full fill-blue-950 dark:fill-white" width={"1rem"} />
          </p>
          <a 
            href={`https://www.twitter.com/${usuario?.twitter_username || " "}`}
            target='blank'
          >
            {usuario.twitter_username || "Not Information"}
          </a>
        </article>
        <article className='flex items-center gap-2'>
          <p>
            <BuildIcon className="h-full w-full fill-blue-950 dark:fill-white" width={"1rem"} />
          </p>
          <p>{usuario.company || "Not Information"}</p>
        </article>
      </div>
    </article>
  )
}

export default UserCardInfo