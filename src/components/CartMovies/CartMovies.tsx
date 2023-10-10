import { RootState } from "../../app/store";

import { useSelector } from 'react-redux'
import CartMovie from "./CartMovie";

const CartMovies = () => {
      const cartMovie = useSelector((state: RootState) => state.movies.cart)
      // console.log(cartMovie)

      const WantTowatchMovies = cartMovie?.filter((movie) => movie.Status === 'want to watch')
      const watchinghMovies = cartMovie?.filter((movie) => movie.Status === 'watching')
      const Watched = cartMovie?.filter((movie) => movie.Status === 'watched')
      console.log(WantTowatchMovies, watchinghMovies, Watched)
      return (

            <div className="grid  lg:grid-cols-3 gap-2">

                  <div className="p-1">
                        <h1 className="border text-center text-2xl p-2 font-bold uppercase ">Want to Watch</h1>


                        <div className="grid grid-cols-1 lg:grid-cols-1  gap-2 mt-2">
                              {WantTowatchMovies.map((movie: any) => (
                                    <CartMovie movie={movie} />
                              ))}

                        </div>
                  </div>
                  {/* <div> <h1 className="border text-center text-2xl font-bold p-1 uppercase">Watching</h1></div> */}
                  <div>
                        <h1 className="border text-center text-2xl font-bold p-1 uppercase">Watching</h1>
                        <div className="container mx-auto p-4">

                              <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 mt-2">
                                    {watchinghMovies.map((movie: any) => (
                                          <CartMovie movie={movie} />
                                    ))}

                              </div>
                        </div>
                  </div>
                  {/* <div>
                        <h1 className="border text-center text-2xl font-bold p-1 uppercase">Watched</h1>
                  </div> */}
                  <div>
                        <h1 className="border text-center text-2xl font-bold p-1 uppercase">Watched</h1>
                        <div className="container mx-auto p-4">

                              <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 mt-2">
                                    {Watched.map((movie: any) => (
                                          <CartMovie movie={movie} />
                                    ))}

                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default CartMovies;