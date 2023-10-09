import React from 'react';
// import Lottie from 'react-lottie';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../../graphql/AllQuery/AllQuety';
import lottieImage from './../../../public/animation_lnip2ovc.json';
import Movie from './Movie';

const AllMovies = () => {
      const { loading, error, data } = useQuery(GET_EPISODES);



      if (loading) {
            return (
                  <div className="text-center w-full mt-10">
                        <span className="loading loading-spinner text-primary w-[100px]"></span>
                        <span className="loading loading-spinner text-secondary w-[100px]"></span>
                        <span className="loading loading-spinner text-accent w-[100px]"></span>
                        <span className="loading loading-spinner text-neutral w-[100px]"></span>
                        <span className="loading loading-spinner text-info w-[100px]"></span>
                        <span className="loading loading-spinner text-success w-[100px]"></span>
                        <span className="loading loading-spinner text-warning w-[100px]"></span>
                        <span className="loading loading-spinner text-error w-[100px]"></span>
                  </div>
            );
      }

      if (error) {
            return <p>Error: {error.message}</p>;
      }

      const { results } = data.episodes;
      console.log(results);

      return (
            <div>
      <h2 className='text-center uppercase mt-3 font-bold shadow-2xl'>Episodes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
  {results.map((episode: any) => (
    <Movie  key={episode.id} episode={episode} >
     
    </Movie>
  ))}
</div>

    </div>
      );
};

export default AllMovies;
