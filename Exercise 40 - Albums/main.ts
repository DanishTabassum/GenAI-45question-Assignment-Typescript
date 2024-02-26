//Exercise 40 - Albums
function make_album(artist:string, title:string):{artist:string, title:string}{
    let album:{artist:string, title:string} = {artist: artist, title: title};
    return album;
}
//creating dictionaries of album
let album1 = make_album('Artist1','Album1');
let album2 = make_album('Artist2','Album2');
let album3 = make_album('Artist3','Album3');
//printing these dictionaries on console
console.log(album1);
console.log(album2);
console.log(album3);