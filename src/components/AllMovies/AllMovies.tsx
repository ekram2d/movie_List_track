// AllMovies.js


import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../../graphql/AllQuery/AllQuety';
import Movie from './Movie';
import { Episode } from '../../graphql/__generated__/graphql';

const AllMovies = () => {
      const { loading, error, data } = useQuery(GET_EPISODES);

      if (loading) {
            return <p>Loading...</p>;
      }

      if (error) {
            return <p>Error: {error.message}</p>;
      }

      const { results } = data?.episodes!;
      //   console.log(results)
      return (
            <div>
                  <h2 className="text-center uppercase mt-3 font-bold shadow-2xl">Episodes</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
                        {results?.map((episode, index) => (
                              <Movie key={index} episode={episode as Episode} />
                        ))}
                  </div>
            </div>
      );
};

export default AllMovies;
