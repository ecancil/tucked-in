/**
 * Created by ecancil on 9/9/17.
 */
enum HTTPMethod{
  GET,
  POST,
  DELETE,
  PUT
}
interface IService {
  callService(endpoint:string, httpMethod:HTTPMethod, payload?:any):Promise<any>;
}
