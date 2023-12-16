import { useEffect, useState } from "react";
import instance from "../instance";
import './Banner.css'
function Banner({ fetchurl }) {
    const base_url = "https://image.tmdb.org/t/p/original";
    const [movieBanner, setMovieBanner] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await instance.get(fetchurl);
                setMovieBanner(data.results[Math.floor(Math.random() * data.results.length)]);
            } catch (error) {
                // Handle error
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [fetchurl]);
    // console.log("movie banner")
    // console.log(movieBanner)
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${base_url}${movieBanner?.backdrop_path})` }}>
               
                {/* <img className="banner-img" src={`${base_url}${movieBanner?.backdrop_path}`} alt="" /> */}
                <div className="row bg-transparent">
                    <div className="col-lg-6 bg-transparent">
                        <div className="banner-content mb-2">
                            <h1>{movieBanner?.name}</h1>
                            <button className="btn btn-danger">Play <i class="fa-solid fa-play bg-transparent ms-2"></i></button>
                            <button className="btn  btn-outline-light ms-4">More Info <i class="fa-solid fa-sort-down bg-transparent ms-2"></i></button>
                            <p className="p">{movieBanner?.overview?.slice(0, 200)}...</p>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-transparent">
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner;