import {HTTPMethod} from "../enum/enums";
/**
 * Created by ecancil on 9/9/17.
 */
export interface IService {
  callService(endpoint:string, httpMethod:HTTPMethod, payload?:any):Promise<any>;
}
