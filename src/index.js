let demo = document.querySelector("#demo");
let style = document.createElement('style');
style.id = "style";
document.head.append(style)
let string = `
/** 你好，我是一名前端开发人员！
*   接下来我要展示一些东西了
*   你准备好了吗？
*   让我们开始吧！
*/
#div{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/**
 *  一个div似乎太单调了
 *  最近在看易经
 *  那我们来绘制一个八卦吧
 *  首先绘制一个圆
 */
 #div{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none
 }
 /**
  * 八卦是一阴一阳 
  * 
  */
 #div{
   background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
#div::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#div::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background:  radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);;
    border-radius: 50%;
}
`;
// string = string.replace(/\n/g, "<br>")
let string2 = '';
let n = -1;
demo.innerHTML = string.substring(0, n);
let step = () => {
    setTimeout (
        () => {
            n++;
            // demo.innerHTML = string.substring(0, n);
            if(string[n] === '\n'){
                string2 += "<br>";
            }else if(string[n] === " "){
                string2+="&nbsp;";
            }
            else{
                string2 += string[n];
            }
            style.innerHTML = string.substring(0, n)
            // string2 += string[n] === '\n' ? "<br>" : string[n]
            demo.innerHTML = string2;
            window.scrollTo(0, 99999)
            demo.scrollTo(0, 999999)
            if(n + 1 < string.length){
                step();
            }
        }, 1
    )
}
step();

