import { createContext } from 'react';
import IShowContext from '../interfaces/Context';

const ShowContext = createContext<IShowContext>(new IShowContext());

export default ShowContext;
