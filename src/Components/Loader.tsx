


const Loader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen" role="status" aria-busy="true"    aria-live="polite"
      aria-label="Loading content">
            <span className="sr-only">Loading...</span>
<div className="absolute loader top-1/2 left-1/2 bottom-1/2 right-1/2">
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
<div className="loader-square"></div>
</div>
</div>
  );
};



export default Loader;
