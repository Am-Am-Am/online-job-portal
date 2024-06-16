import React, { useState } from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold text-center sm:text-left'>{props.name} - {props.course} курс - {props.direction} - Средняя оценка: {props.avg_rating}</h1>
                <p className='text-center sm:text-left'>{props.type} &#x2022; {props.location}</p>
                <p className='text-center sm:text-left'>{props.about}</p>
                <div className='flex items-center gap-2' >
                    {props.skills.map((skill,i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))}

                    {props.tests.map((test,i) => (
                        <p key={i} className='text-green-500 py-1 px-2 rounded-md border border-black'>{test}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500 text-center sm:text-right'>Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`} ago</p>
                <a href={props.tg_link} target="_blank" rel="noopener noreferrer">
                    <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'>Написать в ТГ</button>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default JobCard