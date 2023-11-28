import { useEffect, useState } from "react";
import instance from "../instance";

function Banner({ fetchurl }) {
    const base_url = "https://image.tmdb.org/t/p/original";
    const [movieBanner, setMovieBanner] = useState()

    const fetchData = async () => {
        const { data } = await instance.get(fetchurl)
        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("movie banner")
    console.log(movieBanner)
    return (
        <>
            <h1 style={{ color: "white" }}>banner</h1>
            <img src={`${base_url}${movieBanner?.backdrop_path}`} alt="" />

        </>
    )
}

export default Banner;