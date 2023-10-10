import React from 'react';
import { useDispatch } from 'react-redux';
import { updateToCart } from '../../redux/features/MoviesCart/movieSlice';

const CartMovie = ({ movie }: any) => {
  const dispatch = useDispatch();
  let newStatus = movie.Status;

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    newStatus = event.target.value;
  };

  return (
    <div>
      <div key={movie.id} className="bg-white shadow rounded-lg p-4 text-center">
        <div className="flex items-center justify-center">
          <img src={movie.image} alt={movie.name} className="lg:w-[100px] rounded-lg h-auto mb-2" />
        </div>
        <h3 className="text-xl font-semibold">{movie.name}</h3>
        <p className="text-gray-600">{movie.species}</p>
        <p className="text-gray-600">Status: {movie.Status}</p>

        <select
          className="select select-bordered select-xs w-full max-w-xs btn btn-sm"
          onChange={handleStatusChange}
          value={newStatus}
        >
          <option value="want to watch">Want to Watch</option>
          <option value="watching">Watching</option>
          <option value="watched">Watched</option>
        </select>
        <button
          onClick={() => dispatch(updateToCart({ id: movie.id, Status: newStatus }))}
          className="btn-sm w-[50%] bg-gradient-to-r from-[#ff5f6d]
 from-10% via-[#66ff00] via-30% to-[#ffc371] to-90% ...  rounded-lg p-2 btn text-black"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CartMovie;
