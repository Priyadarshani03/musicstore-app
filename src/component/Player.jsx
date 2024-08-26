export const Player = ({fn, song}) =>{
    console.log('Song Objetc Rec', song);
    return( 
        <div>
            <button onClick={() => {
                fn(false,null);
            }} className="btn btn-success">Back to Song</button>
            <br/>
            <br/>
            <p>
            <img src={song.artworkUrl100} />
            <br/>
            {song?.artistName} {song?.trackName}
            </p>
            <br/>
            <br/>
    <audio controls>
        <source src = {song?.previewUrl} type="audio/mp4"/>
        Your browser doen't support the audio element
    </audio>
    </div>

    )
}