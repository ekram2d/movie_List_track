import { RootState } from "../../app/store";

import { useSelector } from 'react-redux'
import CartMovie from "./CartMovie";
import { CharacterWithStatus } from "../../redux/features/MoviesCart/movieSlice";

const CartMovies = () => {
      const backgroundImageStyle = {
            backgroundImage: `url(https://cdn.wallpapersafari.com/20/75/YwcjhM.jpg)`,
            backgroundSize: 'cover',

      };

      const cartMovie = useSelector((state: RootState) => state.movies.cart)


      const WantTowatchMovies = cartMovie?.filter((movie: CharacterWithStatus) => movie.Status === 'want to watch')
      const watchinghMovies = cartMovie?.filter((movie: CharacterWithStatus) => movie.Status === 'watching')
      const Watched = cartMovie?.filter((movie: CharacterWithStatus) => movie.Status === 'watched')


      return (

            <div style={backgroundImageStyle} className="bg-fixed ... grid  lg:grid-cols-3 gap-2 text-white">

                  <div className="p-1">
                        <h1 className="border text-center text-2xl p-2 font-bold uppercase ">Want to Watch</h1>


                        <div className="grid grid-cols-1 lg:grid-cols-1  gap-2 mt-2">
                              {WantTowatchMovies?.map((movie: CharacterWithStatus) => (
                                    <CartMovie movie={movie} />
                              ))}

                        </div>
                  </div>

                  <div className="p-1">
                        <h1 className="border text-center text-2xl p-2 font-bold ">Watching</h1>


                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 mt-2">
                              {watchinghMovies.map((movie: any) => (
                                    <CartMovie movie={movie} />
                              ))}


                        </div>
                  </div>

                  <div className="p-1">
                        <h1 className="border text-center text-2xl p-2 font-bold  uppercase">Watched</h1>


                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 mt-2">
                              {Watched.map((movie: any) => (
                                    <CartMovie movie={movie} />
                              ))}

                        </div>

                  </div>

            </div>
      );
};

export default CartMovies;