import Image from 'next/image';
import React from 'react'
import { RxGithubLogo } from 'react-icons/rx';

interface Props{
    src:string;
    title:string;
    description:string;
    github?: string;
}

const ProjectCard = ({src , title , description, github} : Props) => {
  return (
    <div 
      className='relative flex flex-col justify-between rounded-lg shadow-lg border border-[#2A0E61] bg-[#0a001f] p-4 w-full md:w-[30%] h-[500px]'
    >
      <div className='flex-1 flex flex-col'>
        <Image
          src={src}
          title={title}
          width={1000}
          height={1000}
          className='w-full object-contain mb-4'
          alt={title}
        />
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300 overflow-hidden text-ellipsis 
                      line-clamp-4 break-words'>
          {description}
        </p>
      </div>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-gray-200 hover:text-[#2A0E61] transition-colors"
        >
          <RxGithubLogo className='mr-2 w-5 h-5' />
          View on GitHub
        </a>
      )}
    </div>
  )
}

export default ProjectCard;
