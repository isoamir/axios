

async function login() {
  const user = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const userN = await axios.post("https://reqres.in/api/login",user)
  console.log(userN.data);
  
}
login();

async function getUser() {
    const user = await axios.get("https://reqres.in/api/login")
    console.log(user.data.data);
}
getUser();