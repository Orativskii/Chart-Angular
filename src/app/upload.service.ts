import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
country;
  constructor(private http: HttpClient) {
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      const formData = new FormData();
      formData.append('uploadFile', file, file.name);
      this.http.post(` http://25.62.119.197:3000/upload`, formData)
        .subscribe(
          data => {
            this.country = data;
            console.log('Array received');
          },
          error => console.log(error)
        );
    }
  }

}

