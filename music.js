const music = new Audio('Assets/audio/2.mp3')
// music.play();

const songs = [
      {
            id: '1',
            songName:`On my Way <br>
            <div class="sub_title">
                  Alan Walker
            </div>`,
            poster:'Assets/img/1.jpg',
      },
      {
            id: '2',
            songName:`Alan-walker-fade <br>
            <div class="sub_title">
                  Alan Walker
            </div>`,
            poster:'Assets/img/2.jpg',
      },
      {
            id: '3',
            songName:`cartoon on & on <br>
            <div class="sub_title">
                  Denial lavi
            </div>`,
            poster:'Assets/img/3.jpg',
      },
      {
            id: '4',
            songName:`Warriyo _ mortals  <br>
            <div class="sub_title">
            Mortals
            </div>`,
            poster:'Assets/img/4.jpg',
      },
      {
            id: '5',
            songName:` Ertugul gazi <br>
            <div class="sub_title">
                  Ertugual 
            </div>`,
            poster:'Assets/img/5.jpg',
      },
      {
            id: '6',
            songName:`Electronic Music <br>
            <div class="sub_title">
                 Electro
            </div>`,
            poster:'Assets/img/6.jpg',
      },
      {
            id: '7',
            songName:`Ager tum mere saat ho <br>
            <div class="sub_title">
                  Tamasha
            </div>`,
            poster:'Assets/img/7.jpg',
      },
      {
            id: '8',
            songName:`Suna hai  <br>
            <div class="sub_title">
                  Neha kakker
            </div>`,
            poster:'Assets/img/8.jpg',
      },
      {
            id: '9',
            songName:`Dilbar <br>
            <div class="sub_title">
                  satyamav jayate
            </div>`,
            poster:'Assets/img/9.jpg',
      },
      {
            id: '10',
            songName:`Duniya <br>
            <div class="sub_title">
                  Luka chuppi
            </div>`,
            poster:'Assets/img/10.jpg',
      },
      {
            id: '11',
            songName:`Lag di lahore di<br>
            <div class="sub_title">
                  Street dance 3
            </div>`,
            poster:'Assets/img/11.jpg',
      },
      {
            id: '12',
            songName:`Putt jatt da <br>
            <div class="sub_title">
                  Putt jatt da 
            </div>`,
            poster:'Assets/img/12.jpg',
      },
      {
            id: '13',
            songName:`Barrishein <br>
            <div class="sub_title">
                  Asif Aslam
            </div>`,
            poster:'Assets/img/13.jpg',
      },
      {
            id: '14',
            songName:`vaaste <br>
            <div class="sub_title">
                  Dhavni Bhanshali
            </div>`,
            poster:'Assets/img/14.jpg',
      },
      {
            id: '15',
            songName:`Lut gaye<br>
            <div class="sub_title">
                  jubin muthiyal
            </div>`,
            poster:'Assets/img/15.jpg',
      },
      {
            id: '16',
            songName:`Tu meri zindgi hai<br>
            <div class="sub_title">
            jubin muthiyal
            </div>`,
            poster:'Assets/img/16.jpg',
      },
      {
            id: '17',
            songName:`Batao yaad Hai vo <br>
            <div class="sub_title">
                  Rahat Ali
            </div>`,
            poster:'Assets/img/17.jpg',
      },
      {
            id: '18',
            songName:`Mere Dhol<br>
            <div class="sub_title">
                 Ali sethi
            </div>`,
            poster:'Assets/img/18.jpg',
      },
      {
            id: '19',
            songName:`Aye munde <br>
            <div class="sub_title">
                  Gurinder gill
            </div>`,
            poster:'Assets/img/19.jpg',
      },
      {
            id: '20',
            songName:`Dunny 82k <br>
            <div class="sub_title">
            Gurinder gill
            </div>`,
            poster:'Assets/img/20.jpg',
      },
]

const songItem = document.getElementsByClassName('song_item')
const masterPlay = document.getElementById('Master_song_play')
let posterPlay = document.getElementById('poster_master_play')
let masterTitle = document.getElementById('masterTitle')
const playListPlay = document.getElementsByClassName('playListPlay')
const wave = document.getElementById('wave')
const currentStartTime = document.getElementById('currentStartTime')
const currentEndTime = document.getElementById('currentEndTime')
const musicSeek = document.getElementById('Music_seek')
const bar2 = document.getElementById('bar2')
const seekDot = document.getElementById('seekDot')




// search data start
const searchResults = document.getElementsByClassName('search_results')[0]

songs.forEach(element => {
      const { id, songName, poster } = element;
      const card = document.createElement('a')
      card.classList.add('card')
      card.href = "#" + id;

      card.innerHTML = `
                                <img src="${poster}">
                                    <div class="Content">
                                        ${songName}
                                    </div>
      `;

      searchResults.appendChild(card);
});

let input = document.getElementsByTagName('input')[0]
// console.log(input);

input.addEventListener('keyup', () => {
      let inputText = input.value.toUpperCase();
      let items = searchResults.getElementsByTagName('a');
    
      for (let index = 0; index < items.length; index++) {
            let item = items[index].getElementsByClassName('Content')[0];
            let textValue = item.textContent || item.innerHTML;
    
        if (textValue.toUpperCase().indexOf(inputText) > -1) {
          items[index].style.display = "flex";
        } else {
          items[index].style.display = "none";
            }
            if (input.value == 0) {
                  searchResults.style.display = "none"
                  
            } else {
                  searchResults.style.display = "flex"
            }
      }
    });
    
// search data end


// fetch the data from Array 
Array.from(songItem).forEach((elem, i) => {
      elem.getElementsByTagName('img')[0].src = songs[i].poster;
      elem.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


// add event listner to button for music play and pause 
masterPlay.addEventListener('click', () => {
      // music.play();
      if (music.paused || music.currentTime <= 0) {
            music.play();
            masterPlay.classList.remove("fa-play")
            masterPlay.classList.add("fa-pause")
            wave.classList.add('active1')
      } else {
            music.pause();
            masterPlay.classList.add("fa-play")
            masterPlay.classList.remove("fa-pause")
            wave.classList.remove('active1')
      }
});


const makeAllPlay = () => {
      Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
            element.classList.add("fa-circle-pause")
            element.classList.remove("fa-circle-play")

      })
}

// make the function and active  the  li background when the music play ....  it,s not working {lets see after}

const makeAllBg = () => {
      Array.from(document.getElementsByClassName('song_item')).forEach((el) => {
            el.style.background = 'rgb(110,110,110,.0)'
      })
}

let index = 0;
Array.from(playListPlay).forEach(element => {
      element.addEventListener('click', (e) => {
            index = e.target.id;
            // console.log(index);
            music.src = `Assets/audio/${index}.mp3`
            music.play();
            masterPlay.classList.remove("fa-play")
            masterPlay.classList.add("fa-pause")
            wave.classList.add('active1')
           

            let songFilter = songs.filter((items) => {
                  return items.id == index; 
            }) 

            // console.log(songFilter);

            songFilter.forEach(item => {
                  let { songName, poster } = item;
                  // console.log(poster);
                  // console.log(masterTitle);
                  masterTitle.innerHTML = songName;
                  posterPlay.src = poster;


                  makeAllBg();
                  Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = 'rgb(110,110,110,0.1)';
                  makeAllPlay();
                  element.target.classList.remove('fa-circle-play')
                  element.target.classList.add('fa-circle-pause')
                  
            })
            })
})
      
// set the  music of the seek for currentTime and currentEndTime
music.addEventListener('timeupdate', () => {
      let music_current = music.currentTime;
      let music_duration = music.duration;
      // console.log(music_current);

      let min1 = Math.floor(music_duration / 60)
      let sec1 = Math.floor(music.duration % 60)

      if (sec1 < 10) {
            sec1 = `0${sec1}`
      }
      currentEndTime.innerText = `${min1}:${sec1}`

      let min2 = Math.floor( music_current/ 60)
      let sec2 = Math.floor(music_current % 60)
      if (sec2 < 10) {
            sec2 = `0${sec2}`
      }

      currentStartTime.innerText = `${min2}:${sec2}`
      // console.log(currentStartTime.innerText);
      
      // update the seekbar

const progressBar = parseInt((music_current / music_duration)* 100);

      musicSeek.value = progressBar;
      let seekbar = musicSeek.value;
      // console.log(musicSeek.value);
      bar2.style.width = `${seekbar}%`
      seekDot.style.left = `${seekbar}%`
})

musicSeek.addEventListener('change', () => {
      music.currentTime = musicSeek.value * music.duration / 100;
})

// volume controls

const volIcon = document.getElementById('vol_icon');
const vol = document.getElementById('vol_capacity');
const volBar = document.getElementById('vol_bar');
const volDot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
    if (vol.value == 0) {
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.remove('fa-volume-down');
        volIcon.classList.add('fa-volume-xmark');
    } else if (vol.value > 0 && vol.value <= 50) {
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.add('fa-volume-down');
        volIcon.classList.remove('fa-volume-xmark');
    } else {
        volIcon.classList.add('fa-volume-high');
        volIcon.classList.remove('fa-volume-down');
        volIcon.classList.remove('fa-volume-xmark');
    }

    let volControl = vol.value;
    volBar.style.width = `${volControl}%`;
    volDot.style.left = `${volControl}%`;
    music.volume = volControl / 100;
});


// set the function for next and previous ....
const next = document.getElementById('next')
const back = document.getElementById('back');


back.addEventListener('click', () => {
      // console.log("button clicked");
      // index = (index - 1 + songs.length) % songs.length; // Ensure index wraps around  /// other method 
      index -= 1;
      if (index < 1) {
            index = Array.from(songItem).length;
      }
      // console.log(index);
      music.src = `Assets/audio/${index}.mp3`;
      music.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      wave.classList.add('active1');
  
      let songFilter = songs.filter((items) => {
          return items.id == index;
      });
  
      songFilter.forEach(item => {
          let { songName, poster } = item;
          masterTitle.innerHTML = songName;
          posterPlay.src = poster;
  
          makeAllBg();
          Array.from(document.getElementsByClassName('song_item'))[index].style.background = 'rgb(110,110,110,0.1)';
          makeAllPlay();
          playListPlay[index].classList.remove('fa-circle-play');
          playListPlay[index].classList.add('fa-circle-pause');
      });
});
  
// add event listner for next music song...
next.addEventListener('click', () => {
      // console.log("button clicked");
      // index = (index - 1 + songs.length) % songs.length; // Ensure index wraps around  /// other method 
      index++;
      if (index > Array.from(songItem).length) {
            index = 1;
      }
      // console.log(index);
      music.src = `Assets/audio/${index}.mp3`;
      music.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      wave.classList.add('active1');
  
      let songFilter = songs.filter((items) => {
          return items.id == index;
      });
  
      songFilter.forEach(item => {
          let { songName, poster } = item;
          masterTitle.innerHTML = songName;
          posterPlay.src = poster;
  
          makeAllBg();
          Array.from(document.getElementsByClassName('song_item'))[index].style.background = 'rgb(110,110,110,0.1)';
          makeAllPlay();
          playListPlay[index].classList.remove('fa-circle-play');
          playListPlay[index].classList.add('fa-circle-pause');
      });
});
  
// Add event listner to the shuffle in the MasterSong....
const shuffleSong = document.getElementById('shuffle')
// console.log(shuffleSong);

shuffleSong.addEventListener('click', (e) => {
      const shuffleText = shuffleSong.innerHTML;
      console.log(shuffle);
      switch (shuffleText) {
            case 'next':
                  shuffleSong.classList.add('fa-repeat')
                  shuffleSong.classList.remove('fa-shuffle')
                  shuffleSong.classList.remove('fa-music')
                  shuffleSong.innerHTML = "repeat"
                  break;
            case 'repeat':
                  shuffleSong.classList.remove('fa-repeat')
                  shuffleSong.classList.add('fa-shuffle')
                  shuffleSong.classList.remove('fa-music')
                  shuffleSong.innerHTML = "random"
                  break;
            case 'random':
                  shuffleSong.classList.remove('fa-repeat')
                  shuffleSong.classList.remove('fa-shuffle')
                  shuffleSong.classList.add('fa-music')
                  shuffleSong.innerHTML = "next"
                  break;
      }
})

// call the all shufle function...
music.addEventListener('ended', () => {
      let shuffleMusic = shuffleSong.innerHTML;
      switch (shuffleMusic) {
            case 'next':
                  musicNext();
                  break;
            case 'repeat':
                  musicRepeat();
                  break;
            case 'random':
                  musicRandom();
      }
    
     
})



// create a function to the music song increse when the music song end ...
const musicNext = () => {
      if (index == songs.length) {
            index = 1;
            
      } else {
            index++;
      }
      music.src = `Assets/audio/${index}.mp3`
      music.play();
      masterPlay.classList.remove("fa-play")
      masterPlay.classList.add("fa-pause")
      wave.classList.add('active1')
           

      let songFilter = songs.filter((items) => {
            return items.id == index;
      })

      // console.log(songFilter);

      songFilter.forEach(item => {
            let { songName, poster } = item;
            // console.log(poster);
            // console.log(masterTitle);
            masterTitle.innerHTML = songName;
            posterPlay.src = poster;


            makeAllBg();
            Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(110,110,110,0.1)';
            makeAllPlay();
            element.target.classList.remove('fa-circle-play')
            element.target.classList.add('fa-circle-pause')
            
      })
       
}
// create a function to the music song repeat when the music song end ...

const musicRepeat = () => {
      index;
      music.src = `Assets/audio/${index}.mp3`
      music.play();
      masterPlay.classList.remove("fa-play")
      masterPlay.classList.add("fa-pause")
      wave.classList.add('active1')
           

      let songFilter = songs.filter((items) => {
            return items.id == index;
      })

      // console.log(songFilter);

      songFilter.forEach(item => {
            let { songName, poster } = item;
            // console.log(poster);
            // console.log(masterTitle);
            masterTitle.innerHTML = songName;
            posterPlay.src = poster;


            makeAllBg();
            Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(110,110,110,0.1)';
            makeAllPlay();
            element.target.classList.remove('fa-circle-play')
            element.target.classList.add('fa-circle-pause')
            
      })
}
// create a function to the music song Random when the music song end ...

const musicRandom = () => {
      if (index == songs.length) {
            index = 1;   
      } else {
            index = (Math.floor(Math.random() * songs.length + 1))
      }
      music.src = `Assets/audio/${index}.mp3`
      music.play();
      masterPlay.classList.remove("fa-play")
      masterPlay.classList.add("fa-pause")
      wave.classList.add('active1')
           

      let songFilter = songs.filter((items) => {
            return items.id == index;
      })

      // console.log(songFilter);

      songFilter.forEach(item => {
            let { songName, poster } = item;
            // console.log(poster);
            // console.log(masterTitle);
            masterTitle.innerHTML = songName;
            posterPlay.src = poster;


            makeAllBg();
            Array.from(document.getElementsByClassName('song_item'))[index - 1].style.background = 'rgb(110,110,110,0.1)';
            makeAllPlay();
            element.target.classList.remove('fa-circle-play')
            element.target.classList.add('fa-circle-pause')
            
      })
}

      

  






//  add event listeners in popular song  arrow left and right move
const leftArrow = document.getElementById('left_arrow_button')
const rightArrow = document.getElementById('right_arrow_button')
const popularSongList = document.getElementsByClassName('popular_song_list')[0];

rightArrow.addEventListener('click', () => {
      popularSongList.scrollLeft += 330;
      
})

leftArrow.addEventListener('click', () => {
      popularSongList.scrollLeft -= 330;
      
})

//  add event listeners in popular artist arrow left and right move
const artistleftArrow = document.getElementById('pop_art_left')
const artistrightArrow = document.getElementById('pop_art_right')
const popularArtList = document.getElementsByClassName('popular-Artist-List')[0];

artistrightArrow.addEventListener('click', () => {
      popularArtList.scrollLeft += 330;
      
})

artistleftArrow.addEventListener('click', () => {
      popularArtList.scrollLeft -= 330;
      
})