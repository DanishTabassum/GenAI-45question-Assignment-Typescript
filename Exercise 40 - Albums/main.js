//Exercise 40 - Albums
function make_album(artist, title) {
    var album = { artist: artist, title: title };
    return album;
}
//creating dictionaries of album
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2');
var album3 = make_album('Artist3', 'Album3');
//printing these dictionaries on console
console.log(album1.title);
console.log(album2);
console.log(album3);
