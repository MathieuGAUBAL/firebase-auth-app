
import { useEffect, useState } from "react";

const Playlist = () => {
    const [playlists, setPlaylist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/playlists')
        .then((response => response.json()))
        .then(data => {
            setPlaylist(data);
        })
    }, []);


    return (
        <div>
            <h1>My Playlist</h1>
            {playlists.map(item => (
                <div key={item.id} style={{padding:'1rem'}}>
                    <p>Artist : {item.artist}</p>
                    <p>Genre : {item.genre}</p>
                    <p>title : {item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Playlist;