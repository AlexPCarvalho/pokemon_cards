const Search = () => {
  return (
    <div className="max-w-2xl mx-auto mb-6 px-4">
          <div className="relative">
            <input
              autoFocus
              type="text"
              placeholder="Pesquise pelo Pokemon..."
              className="w-full h-14 px-9 focus:border-gray rounded-full bg-white   text-lg  border-2"
            />
            
          </div>
        </div>
  );
};

export default Search;