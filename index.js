const token = '152cfd5fbfd857ab32de948c97d28163524d0f7d'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
