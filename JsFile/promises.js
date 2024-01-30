async function getdata(){
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");

    // console.log(await data.json());
    let puredata = await data.json();
    console.log(puredata[0])

    const ele = document.getElementById('h1');
    // ele.innerHTML = puredata[0].userId;
    ele.innerHTML = puredata[1].title;



}

getdata()