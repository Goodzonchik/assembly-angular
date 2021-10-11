import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assembly-angular';
  assebmly: string = '';

  ngOnInit(): void {
    let importObject: any;
    WebAssembly.instantiateStreaming(fetch('assets/assembly/optimized.wasm'), importObject).then((results) => {
      this.assebmly = (results.instance.exports as any).add(2, 3);
    });
  }
}
