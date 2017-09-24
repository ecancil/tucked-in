/**
 * Created by ecancil on 9/9/17.
 */
export class AuthModel{

   public signupEmail: string = Math.random() + "@gmail.com";
   public signupPassword: string = "Ec@ncil111";
   public signupPasswordVerification: string = "Ec@ncil111";


   public accountUserNameUpdate: string;

   public currentUser:any;

   public user: any;
   public accessToken: string;
}
