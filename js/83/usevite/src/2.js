
export default class person{
    constructor(first,last,email,createTime){
        this.first=first;
        this.last=last;
        this.email=email
        this.createTime=createTime;
    }
    print(){
        console.log(`first:${this.first} last:${this.last} Email:${this.email} Created:${this.createTime}`)
    }
}
