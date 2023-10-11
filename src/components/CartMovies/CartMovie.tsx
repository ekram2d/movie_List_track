
import { useDispatch } from 'react-redux';
import { updateToCart, deleteToCart, CharacterWithStatus } from '../../redux/features/MoviesCart/movieSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const CartMovie = ({ movie }: { movie: CharacterWithStatus }) => {
  const dispatch = useDispatch();
  let newStatus = movie.Status || 'want to watch';

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    newStatus = event.target.value
  };

  return (
    <div>
      <div key={movie.id} className="bg-white shadow rounded-lg p-4 text-center relative">
        <button
          onClick={() => dispatch(deleteToCart(movie?.id!))}
          className="text-3xl absolute top-2 right-2 text-red-500 hover:text-red-600"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <div className="flex items-center justify-center">
          <img
            src={movie.image!}
            alt={movie.name!}
            className="w-full  md:w-[70%] lg:w-[40%] rounded-lg h-auto mb-2"
          />
        </div>
        <h3 className="text-xl font-semibold">{movie.name}</h3>
        <p className="text-gray-600">{movie.species}</p>
        <p className="text-gray-600">Status: {movie.Status}</p>

        <select
          className="w-full select select-bordered select-xs mb-1 btn btn-sm"
          onChange={handleStatusChange}
          value={newStatus.toString()} // Ensure newStatus is a string
        >
          <option value="want to watch">Want to Watch</option>
          <option value="watching">Watching</option>
          <option value="watched">Watched</option>
        </select>
        <button
          onClick={() => dispatch(updateToCart({ id: movie.id!, Status: newStatus }))}
          className="btn-sm w-full bg-gradient-to-r from-[#ff5f6d]
          from-10% via-[#66ff00] via-30% to-[#ffc371] to-90% ... rounded-lg p-2 btn text-black"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CartMovie;
