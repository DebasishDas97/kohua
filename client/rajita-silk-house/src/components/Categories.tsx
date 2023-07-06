import { Link } from "react-router-dom";

export default function Categories() {
  const column = "flex-[1] flex flex-col gap-3";
  const row = "flex-[1] flex gap-3 relative overflow-hidden";
  const button =
    "min-w-[100px] uppercase cursor-pointer p-3 text-center bg-black m-auto top-0 left-0 right-0 bottom-0 w-fit h-12 text-white absolute text-lg font-medium";

  return (
    <section className="flex gap-3 m-3 md:mx-[200px] mx-[11px] mb-[140px] flex-wrap md:flex-nowrap md:h-[80vh] h-auto">
      <div className={`${column}`}>
        <div className={`${row}`}>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category-img"
          />
          <Link className={`${button}`} to="/products/1">
            Sale
          </Link>
        </div>
        <div className={`${row}`}>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category-img"
          />
          <Link className={`${button}`} to="/products/1">
            Women
          </Link>
        </div>
      </div>
      <div className={`${column}`}>
        <div className={`${row}`}>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category-img"
          />
          <Link className={`${button}`} to="/products/1">
            New Season
          </Link>
        </div>
      </div>
      <div className="md:flex-[2] flex-auto flex flex-col gap-3">
        <div className={`${row}`}>
          <div className={`${column}`}>
            <div className={`${row}`}>
              <img
                className="object-cover w-full h-full"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="category-img"
              />
              <Link className={`${button}`} to="/products/1">
                Men
              </Link>
            </div>
          </div>
          <div className={`${column}`}>
            <div className={`${row}`}>
              <img
                className="object-cover w-full h-full"
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="category-img"
              />
              <Link className={`${button}`} to="/products/1">
                Accessories
              </Link>
            </div>
          </div>
        </div>
        <div className={`${row}`}>
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category-img"
          />
          <Link className={`${button}`} to="/products/1">
            Shoes
          </Link>
        </div>
      </div>
    </section>
  );
}
