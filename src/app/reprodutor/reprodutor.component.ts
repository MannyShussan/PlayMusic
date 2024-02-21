import { Component } from '@angular/core';
import playlistSimulate from '../shared/playlist.simulate';
import Music from '../shared/music.model';

@Component({
  selector: 'app-reprodutor',
  templateUrl: './reprodutor.component.html',
  styleUrl: './reprodutor.component.css'
})
export class ReprodutorComponent {
  public play: boolean = false;
  public musicPath: string = '';
  public current: string = '0:00';
  public duration: string = '0:00;'
  public progress: number = 0;
  public music: any;
  public playLIst: Music[] = playlistSimulate;
  public index: number = 0;
  public artist: string = '';
  public song: string = '';
  public lib: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.load();
    setInterval(() => {
      let currentTime = Math.floor(this.music.currentTime);
      this.progress = (this.music.currentTime / this.music.duration) * 100;
      let secondsCurrentTime = Math.floor(currentTime % 60);
      this.current = `${Math.floor(currentTime / 60)}:${secondsCurrentTime < 10 ? '0' + secondsCurrentTime : secondsCurrentTime}`;;
      this.duration = `${Math.floor(this.music.duration / 60)}:${(Math.floor(this.music.duration % 60)) < 10 ? '0' + Math.floor(this.music.duration % 60) : Math.floor(this.music.duration % 60)}`;
      if (this.current === this.duration) {
        this.index++;
        this.load();
        this.musicPlay();
      }
    }, 100);
  }

  private load() {
    this.music = new Audio(this.playLIst[this.index].src);
    this.artist = this.playLIst[this.index].artistName;
    this.song = this.playLIst[this.index].musicName;
    this.lib = this.playLIst[this.index].album;
  }

  public musicPlay() {
    this.music.play();
    this.play = true;
  }

  public musicPause() {
    this.music.pause();
    this.play = false;
  }

  public next() {
    this.musicPause();
    if (++this.index >= this.playLIst.length) this.index = 0;
    this.load();
  }

  public prev() {
    this.musicPause();
    if (--this.index < 0) this.index = this.playLIst.length - 1;
    this.load();
  }
}
