import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private url: string;
  private httpOptions: object;

  constructor(private http: HttpClient) {
    console.log('service-construtor');
  }

  build(url) {
    this.url = 'http://localhost:8000/api/v1/' + url;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1YmFjYTlhOWNhYTBhYWI4NWU0YTYzMTNmNTE0YmEzZTE5N2E5OWVlZDI5YzM3ZWEyMmFmMmIxNmJjYTBjMDU5ZDk2NzUwNmVhNWIxNzdjIn0.eyJhdWQiOiIxIiwianRpIjoiMzViYWNhOWE5Y2FhMGFhYjg1ZTRhNjMxM2Y1MTRiYTNlMTk3YTk5ZWVkMjljMzdlYTIyYWYyYjE2YmNhMGMwNTlkOTY3NTA2ZWE1YjE3N2MiLCJpYXQiOjE1MzMyMjk0NTksIm5iZiI6MTUzMzIyOTQ1OSwiZXhwIjoxNTY0NzY1NDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.guq1fq-CqiyGk_-3rU_Uw8SGWffn-Ig9KnomrF_jLwnZiy2yX3hIUV-8JMoWucBwPGgwNQmGKdByHY-Lu18oKNmUPyXFkaz3fFWddJmvz7prhidSk0qeJUmfli-_YUoPi4fuO0wcq9SDUBKu9f8MwmWr5hxSkKvOld8lUvJuih7zHiBWKco5J1tdMyYQ4MkIrJLVk0bvN71Z4UkpibmASj5VokD2ZA5MQCAUT9hPdiB1GF8ThcogBMX_xt4vKoDwDgxOmDxonS_05jWTrMVPUJltQnpTQ6fKi_245bldfQz474DXGILdxecWSsEboWtNhEGbRrKr8G7PUCWD47yld3ZTMxfUko6QrBJCHi9YJjrJbk8CDoCaR-rUSLbGFt8QgwhVRF_yekfABYvy06IQAZxPiS3T4HVKAICvhMl0NWVlpi3ZWfwILqmdEdvZPvaduGmiEQzoy4m8UGRPhwa7OIV09FWpwldM1-bIfiWQveudDjDNFrccXQ6ZOLfKh6yl3rtfDjxz4TRSraZpqDKySLwfPYEbybAM7fycWgb-haDvjMKvRfRZj6pjTshOj4LWNzjkJgLLjpWH_SycShQWhu6UapaaFc0ICEvt2Q8p9mn2zHxvZ5IssT7mNnBSMDRnuxRLZ01kJwZDb0SSfVRUAhUUw84bVUCoArdyfGujv_g'
      })
    }

    return this;
  }

  list() {
    return this.http.get(this.url, this.httpOptions);
  }

  create(data) {
    return this.http.post(this.url, data, this.httpOptions);
  }

  get(id) {
    return this.http.get(this.url + '/' + id, this.httpOptions);
  }

  update(id, data) {
    return this.http.put(this.url + '/' + id, data, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, this.httpOptions);
  }
}
