import {useState} from 'react'

export const useSearch =(value={}) => {
    const [movieShearched, setMovieShearched] = useState(value)

    const handleInputChange =({target})=>{
        setMovieShearched({
            ...movieShearched,
            [target.name]: target.value
        })
    }
    const reset =()=>{
        setMovieShearched(value)
    }
    return[
        movieShearched,
        handleInputChange,
        reset
    ]
}