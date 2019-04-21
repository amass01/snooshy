import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "sn-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  @ViewChild("videoPlayer") videoplayer: ElementRef;
  public videoSource: string;

  constructor() {
    this.videoSource = "../../../assets/video/snooshy-home.mp4";
  }

  ngOnInit() {
    this.videoplayer.nativeElement.play();
  }

}
