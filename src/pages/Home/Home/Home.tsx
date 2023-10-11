import AllMovies from "../../../components/AllMovies/AllMovies";

const Home = () => {
      const backgroundImageStyle = {
            backgroundImage: `url(https://t3.ftcdn.net/jpg/05/52/90/10/360_F_552901001_iVDRtsrQOjVvyH3foTMEYW2t0YalwYCL.webp)`,
            backgroundSize: 'cover', 
            width: '90%', 
            height:'100vh'
            
          };

  return (
    <div className="">
            <div className="bg-fixed mx-auto h-[80%] flex items-center justify-center" style={backgroundImageStyle}>
        <div className="text-white text-center p-16">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Netflix Time Movies</h1>
          <p className="text-lg mb-8">Explore a world of entertainment with our vast collection of movies and TV shows.</p>
          <button className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 text-xl font-semibold">
            Start Browsing
          </button>
        </div>
      </div>

      <AllMovies />
    </div>
  );
};

export default Home;
