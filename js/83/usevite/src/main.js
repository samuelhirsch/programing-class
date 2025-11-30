import person from "./2.js";
import dayjs from 'dayjs'
import "./style.css"
const now=dayjs()
const newPerson=document.querySelector('#person')
const samuel=new person('samuel','hirsch','sam@gmail.com',now.format('dddd,MMMM D YYYY h:mm:ss A'));
samuel.print();
newPerson.innerHTML=` <span>First:</span> ${samuel.first}, <span> Last: </span>${samuel.last}, 
 <span>Email:</span>${samuel.email},<span>Created-</span>${samuel.createTime}`;

