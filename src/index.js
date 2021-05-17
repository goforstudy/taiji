let demo = document.querySelector("#demo");
let string = `
你好，我是一名前端开发人员！
接下来我要加样式了
body{
    color:red;
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
            }else{
                string2 += string[n];
            }
            demo.innerHTML = string2;
            if(n + 1 < string.length){
                step();
            }
        }, 100
    )
}
step();