const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5Y2Y0MjRlOWFmYTRjNThiZGJmNDAyNWUxZmZhZSIsInN1YiI6IjYzZjQxODBhMTUzNzZjMDBjYjI0NTE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GsbbbumYVXm5qfgaYMmZTD5gSQbY4vfkKveTqOfGt5Y",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}