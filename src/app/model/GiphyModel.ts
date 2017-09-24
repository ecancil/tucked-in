/**
 * Created by ecancil on 9/24/17.
 */
export class GiphyModel{

   private map: {[term: string] : Array<any>; } = {}

   public hasGiphyResult(term:string){
      return this.map[term] != null;
   }

   public getGiphyResult(term:string):Array<any>{
      return this.map[term];
   }

   public setGiphyResult(term:string, result:Array<any>):void{
      this.map[term] = result;
   }

}
