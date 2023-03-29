import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Movie } from '../typing'

export const modalState = atom({// state for modal
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | DocumentData | null>({ //state for movie
  key: 'movieState',
  default: null,
})