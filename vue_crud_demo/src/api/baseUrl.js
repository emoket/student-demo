let baseUrl = "";
// console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = "http://localhost:9000/"
    break
  case 'production':
    baseUrl = "http://localhost:9000/"
    break
}
export default baseUrl;
