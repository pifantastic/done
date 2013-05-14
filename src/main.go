package main

import (
  "net/http"
)

func main() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    if r.URL.Path == "/" {
      http.ServeFile(w, r, "./web/index.html")
    } else {
      http.NotFound(w, r)
    }
  })
  http.Handle("/js/", http.StripPrefix("/js", http.FileServer(http.Dir("./js/"))))
  http.Handle("/css/", http.StripPrefix("/css", http.FileServer(http.Dir("./css/"))))
  http.Handle("/img/", http.StripPrefix("/img", http.FileServer(http.Dir("./img/"))))
  http.ListenAndServe(":6789", nil)
}
