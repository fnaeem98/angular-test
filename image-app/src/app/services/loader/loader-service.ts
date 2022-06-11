import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  hideLoader(){
    const loaderElement = document.getElementById('loading');
    if (loaderElement) {
      console.log('removing loader');
      loaderElement.classList.add('d-none');
    }
  }

  showLoader(){
    const loaderElement = document.getElementById('loading');
    if (loaderElement) {
      console.log('adding loader');
      loaderElement.classList.remove('d-none');
    }
  }

}
