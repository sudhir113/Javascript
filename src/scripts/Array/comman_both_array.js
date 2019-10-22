// import { parse } from "querystring";

let a = [ 
    {dept_id:'1',department:'admin'},{dept_id:'2',department:'admin1'},{dept_id:'3',department:'admin3'}];
 
 let b =[{dept_id:'3',department:'admin3'},{dept_id:'5',department:'admi41'},{dept_id:'6',department:'admin6'}];
 
 let c = a.filter(ele => {
         let d ={};
         b.forEach(bele => {
             if(ele.dept_id == bele.dept_id){
                d=ele;
             }
         });
         return d;
 });
 console.log('c',c);