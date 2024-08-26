
import { useEffect, useState } from "react";
import { Search } from "../component/Search"
import { Songs } from "../component/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../component/Player";



export const SearchPage = () =>{
   //Componenets Life Cycle
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
 const [song, setPlayerSong] = useState(null);

  const loadSongs = async () =>{
   setSongs(await getSongs('Latest Song'));
  }
 useEffect(() =>{
   loadSongs();
 }, [])

 const togglePlayer = (flag, songarg) =>{
   console.log('Flag', flag, 'Song Object', songarg);
   setPlayerSong(songarg);
   setFlag(flag);

 }
   const getArtistName = async (artistName) =>{
      console.log('Rec Artist Name', artistName);
     setSongs(await getSongs(artistName));

   }
   const jsx = <><Search fn = {getArtistName}/>
   <Songs fn = {togglePlayer} allsongs ={allSongs}/>
   </>;
   return (
      <div className="container">
         <h1 className="alert alert-info type-centre" > Music Store</h1>
      
         {flag?<Player fn = {togglePlayer} song = {song}/>:jsx}
   
   </div>);

}