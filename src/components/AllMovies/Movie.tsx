import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/MoviesCart/movieSlice';
import {  Episode } from '../../graphql/__generated__/graphql';

const Movie = ({ episode }: { episode: Episode }) => {
      const dispatch = useDispatch();
      const { characters } = episode;
      const characterAtIndex9 = characters?.[9];

      if (!characterAtIndex9) {
            return null;
      }

      const { id, image, name, species } = characterAtIndex9;



      const addMovie = () => {
            const Status = 'want to watch';
            const Movie = { ...characterAtIndex9, Status };
            console.log(Movie);

            dispatch(addToCart(Movie));
      };


      return (
            <div className='col-span-1 cursor-pointer group shadow-2xl rounded-2xl p-3 text-center'>
                  <div className='flex flex-col gap-2 w-full'>
                        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                              <img
                                    className='object-cover h-full w-full group-hover:scale-110 transition'
                                    src={image?.toString() ?? ''}
                                    alt='Room'
                              />
                              <div className='absolute top-3 right-3'></div>
                        </div>
                        <p>{species}</p>
                        <div className='font-semibold text-2xl uppercase'>{name}</div>
                        <div className='font-light text-black font-serif text-lg'>{species}</div>
                        <div className='font-semibold text-center font-mono'>id: {id}</div>
                  </div>
                  <button
                        onClick={addMovie}
                        className="btn-sm w-full bg-gradient-to-r from-[#ff5f6d] from-10% via-[#66ff00] via-30% to-[#ffc371] to-90% ...  rounded-lg p-2 btn text-black"
                  >
                        Add To Watch List
                  </button>
            </div>
      );
};

export default Movie;
