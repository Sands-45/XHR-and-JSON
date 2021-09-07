const getData = (resources) => {
  return new Promise((resolve, reject) => {
    const xhttpReq = new XMLHttpRequest();
    xhttpReq.addEventListener("readystatechange", () => {
      if (xhttpReq.readyState === 4 && xhttpReq.status === 200) {
        const data = JSON.parse(xhttpReq.responseText);
        resolve(data);
      } else if (xhttpReq.readyState === 4) {
        reject("Data Note Found");
      }
    });

    xhttpReq.open("GET", resources);
    xhttpReq.send();
  });
};

getData("./data.json")
  .then((data) => {
    console.log("We have your Data", data);
    const Div = document.getElementById("xhr_data");
    for (let i = 0; i < data.length; i++) {
      const list = document.createElement("li");
      const text = document.createTextNode(data[i].name);
      list.appendChild(text);
      Div.appendChild(list);
    }
  })
  .catch((error) => {
    console.log("Data Not Found", error);
  });
