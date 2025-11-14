class MyElement {
    text = '';
    children = [];
    constructor(myText) {
        this.innerText = myText;
    }
   
    setInnerText(myText) {
        this.innerText = myText;
    }
    getInnerText() {
        return this.innerText;
    }
    render() {
      console.log(this.getInnerText());  
        this.children.forEach((child) => {
            child.render();
        });
    }
     addChild(child) {
        this.children.push(child);
    }
    removeChild(child){
     this.children=this.children.filter((e)=>
            e!==child
       );
    }
};
class Div extends MyElement {
    render() {
        console.log('Im a div');
        super.render();
    }
};

class H1 extends MyElement {
    render() {
        console.log('Im a H1');
        super.render();
    }
};
const div=new Div('a');
const h11=new H1('b');
const h12=new H1('c');
div.addChild(h11);
div.addChild(h12);
div.render();
div.setInnerText('new div inner text');
div.removeChild(h11);
div.render();

