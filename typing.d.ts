//   the file name means it is a typescript definition file.

//   in typescript the way i have types for something i can either use types or
// interfaces
// interfaces are cool becuase i can extend into another interface

// 3 different types

//  Genre
//  Movie
//  Element
export type Genre = {
    id: number
    name: string
  }
//   i found the types from the array of movies was when i server side rendered
//  and connected to my api then console logged netflix originals in index.tsx.
  
  export interface Movie {
    title: string
    backdrop_path: string
    media_type?: string// any type that is optional i put the question mark "?"
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }// i got to know this type by console.logging netflix originals i 
//   get my array of 20 different results of movies and also 
// it is considered server side rendering.
  
  export interface Element {
    type:
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
  }

//   the last type is for element 

// the element has a type object and can be either of the values mentioned 
// on lines 42-47




