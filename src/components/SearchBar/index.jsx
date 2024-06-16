import React, { useState } from 'react'

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        course: "",
        type: "",
        special_tests: "",
        direction: ""
    })

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
    }
    

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select onChange={handleChange} name="course" value={jobCriteria.course} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Курс обучения</option>
            <option value="1">1 курс</option>
            <option value="2">2 курс</option>
            <option value="3">3 курс</option>
            <option value="4">4 курс</option>
            <option value="5">5 курс</option>
            <option value="6">6 курс</option>
        </select>
        <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Тип</option>
            <option value="Практика">Практика</option>
            <option value="Cтажировка">Cтажировка</option>

        </select> 
        <select onChange={handleChange} name="direction" value={jobCriteria.direction} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Направление</option>
            <option value='Медиакоммуникации'>Медиакоммуникации</option>
            <option value="Реклама и связи с общественностью">Реклама и связи с общественностью</option>
            <option value="Телевидение и новые медиа">Телевидение и новые медиа</option>
        </select>
        <select onChange={handleChange} name="special_tests" value={jobCriteria.special_tests} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Пройденные тесты</option>
            <option value='Да'>Да</option>
            <option value="Нет">Нет</option>
        </select>
       
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Найти</button>
    </div>
  )
}

export default SearchBar