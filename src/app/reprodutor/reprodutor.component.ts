import { Component } from '@angular/core';

@Component({
  selector: 'app-reprodutor',
  templateUrl: './reprodutor.component.html',
  styleUrl: './reprodutor.component.css'
})
export class ReprodutorComponent {
  public play: boolean = false;
  public musicPath: string = '';
  public music: any;

  ngOnInit(): void {
    this.musicPath = '../../assets/Khruangbin - B-Side.mp3';
    this.music = new Audio();
    this.music.src = this.musicPath;
  }

  public musicPlay() {
    this.music.play();
    this.play = true;
  }

  public musicPause() {
    this.music.pause();
    this.play = false;
  }
}
