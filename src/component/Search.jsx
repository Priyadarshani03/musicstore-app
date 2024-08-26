import { useRef } from "react";

export const Search = ({fn}) =>{
    const artist = useRef();

    return(
        <>
        <label>Artist Name</label>
    <input  ref ={artist} type='text' className="form-control" placeholder='Serach  as per your choice of artist' />
    <button className="btn btn-success" onClick={()=>{
        fn(artist.current.value);

    }}>Search for The Song</button>
    <br/>
    <br/>
    </>
);
  
}