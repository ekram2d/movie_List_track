import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/MoviesCart/movieSlice';



const Movie = ({ episode }: any) => {
      // Use the 'episode' prop to render the movie details
      const dispatch = useDispatch()
      const movie = episode?.characters[9];
      const { id, image, name, species } = movie;
      console.log(movie)
      // const addmovie = (movie: any) => {
      //       console.log(movie);
      // }
      return (
            <div className='col-span-1 cursor-pointer group shadow-2xl rounded-2xl p-3 text-center'>
                  <div className='flex flex-col gap-2 w-full'>
                        <div
                              className='
                    aspect-square 
                    w-full 
                    relative 
                    overflow-hidden 
                    rounded-xl
                  '
                        >
                              <img
                                    className='
                      object-cover 
                      h-full 
                      w-full 
                      group-hover:scale-110 
                      transition
                    '
                                    src={image}
                                    alt='Room'
                              />
                              <div
                                    className='
                    absolute
                    top-3
                    right-3
                  '
                              >
                                    {/* <HeartButton /> */}
                              </div>
                        </div>
                        <div className='font-semibold text-2xl uppercase'>{name}</div>
                        <div className='font-light text-black font-serif text-lg'>
                              {species}
                        </div>

                        <div className='font-semibold text-center font-mono'>id:{id}</div>

                  </div>

                  <button onClick={() => dispatch(addToCart(movie))} className="btn-sm w-full bg-gradient-to-r from-[#ff5f6d]
 from-10% via-[#66ff00] via-30% to-[#ffc371] to-90% ...  rounded-lg p-2 btn text-black">Add To Watch List</button>

            </div>

      )
};

export default Movie;
