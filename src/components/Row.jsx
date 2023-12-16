import { useEffect, useState } from "react";
import instance from "../instance";
import './Row.css'

function Row({ title, fetchurl }) {

    const [allMovies, setAllMovies] = useState();
    const base_url = "https://image.tmdb.org/t/p/original";  //for movie poster image
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(fetchurl);
                setAllMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [fetchurl]);
    console.log(allMovies)

    return (
        <div className="row">
            <h1 style={{ color: "white" , fontSize:"20px" }}>{title}</h1>
            <div className="movie-row">
                {
                    allMovies?.map(item => (
                        <img className="movie" key={item.id} src={`${base_url}${item.poster_path}`} alt={`${item.name}`} />

                    ))
                }
            </div>

        </div>
    );
}


export default Row;