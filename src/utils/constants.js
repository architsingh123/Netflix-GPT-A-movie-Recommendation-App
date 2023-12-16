

export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer"+ process.env.REACT_APP_TMDB_KEY,
    }
  };

  export const IMG_CDN="https://image.tmdb.org/t/p/w500";

  export const LOGO_URL="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  export const SUPPORTED_LANGUAGE=[
    {identifier : "en", name:"English"},
    {identifier : "hindi" ,name:"Hindi"},
    {identifier : "spanish" ,name:"Spanish"}, 
  ]

  export const OPEN_AI_GPTKEY=process.env.REACT_APP_OPEN_AI_GPTKEY;