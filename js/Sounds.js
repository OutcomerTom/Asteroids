// Dźwięki to ciężka sprawa w HTML5. Na szczęście od jakiegoś czasu jest w JS dostępne Audio API, które pozwala na dużo więcej niż zwykły tag audio.
// Plugin howler.js nieprawdopodobnie ułatwia problem.
// Dlatego nie będziemy głębiej wchodzić w temat tylko użyjemy to co trzeba i już.
// Jeśli jednak masz ochotę poczytać coś więcej to poniżej kilka linków:
// http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
// https://developer.mozilla.org/en-US/docs/Web_Audio_API
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
// 
Sounds = {
	active:false,
	init:function(){
		Sounds.fx = new Howl({
			// Modernizr pomaga nam wykryć czy przeglądarka gra m4a czy ogg (mp3 ignorujemy ze względów na niefajną licencję)
			// Żeby to zadziałało bez błędu w konsoli strona musi być otworzona przez http.
			// Możesz to osiągnąć na lokalnym serwerze (Zzainstaluj MAMP na Maca, albo WAMP na windows).
			// Albo możesz wysłać całą paczkę na zdalny serwer (i przy okazji wystawić link na FB i pokazać znajomym jaką fajną grę napisałaś/napisałeś).
			urls:['audio/asteroids.'+(Modernizr.audio.m4a ? 'm4a' : 'ogg')],
			// Funkcja spritów howlera pozwala nam załadować tylko jeden plik i odtwarzać jego fragmenty.
			// Potem wystarczy podać nazwę dźwięku do metody play().
			sprite: {
				bum1:[0,1100],
				bum2:[1125,1000],
				laser:[2150,290],
				win:[2475,575],
				thrust:[3100,290]
			},
			// po załadowaniu odpali się funkcja Sounds.loaded (odpali ją zdarzenie load)
			onload:Sounds.loaded
		});
		

	},
	// odpala się po załadowaniu pliku
	loaded:function(){
		Sounds.active = true;
	},
	// tą metodą odtwarzamy dźwięki
	play:function(s){
		if(Sounds.active){
			Sounds.fx.play(s);
		}
	}
};