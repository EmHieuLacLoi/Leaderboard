/*
    Ý tưởng:
        Sau khi nhập dữ liệu và ấn nút add -> dữ liệu sẽ được chuyển thành JSON và thêm vào session storage,
        Để hiển thị dữ liệu -> đọc thông tin trong session storage và ghi ra màn hình,
        Với mỗi dữ liệu được nhập mới hoặc dữ liệu cũ có thay đổi thông tin sẽ được cập nhật lại 
        trong session storage và đọc lại thông tin để hiện thị,
    Thêm chức năng: ?
        Tải thông tin về máy dưới dạng txt
        Load thông tin từ file txt
*/
// lấy dữ liệu từ html
const data = document.querySelectorAll("input");
const button = document.querySelector("button");

// tạo 1 obj chứa tất cả input
const objData = {};

// tạo 1 đối tượng Date() mới
const time = new Date();
// 1 hàm dùng để lấy thời gian và trả về chuỗi theo định dạng
function getTime() {
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return `${monthNames[month]} ${day}, ${year} ${hours}:${minutes}`;
}

// sự kiện khi người dùng ấn nút add player
button.addEventListener("click", () => {
  // tạo 1 biến duyệt điều kiện
  let validate = true;
  // xét các điều kiện từ input được submit
  if (data[0].value == "") validate = false;
  if (data[1].value == "") validate = false;
  if (data[2].value == "") validate = false;
  if (data[3].value == "") validate = false;
  // lấy thẻ có class error-message từ HTMl
  let message = document.querySelector(".error-message");

  // điều kiện sai
  if (!validate) {
    // gán text thông báo và màu cho thẻ error-message
    message.textContent = "All fields are required!";
    message.style.color = "red";
  }
  //   điều kiện đúng
  else {
    // gán thẻ error-message lại bằng rỗng
    message.textContent = "";

    // Tạo JSON và gán vào session storage
    // thêm 1 obj(chứa thông tin người dùng) vào obj(chứa tất cả input) đã tạo với key là last name của người dùng
    objData[data[1].value.toUpperCase()] = {
      firstName: data[0].value.toUpperCase(),
      lastName: data[1].value.toUpperCase(),
      country: data[2].value.toUpperCase(),
      playerScore: data[3].value.toUpperCase(),
      timeCreated: getTime(),
    };

    // tạo biến convert để chuyển đổi obj chứa tất cả input thành JSON
    let convert = JSON.stringify(objData, undefined, 4);
    // truyền JSON vừa tạo vào session storage với key person
    sessionStorage.setItem("person", convert);
    // xóa thông tin đang hiển thị ở trên các trường input
    data.forEach((d) => (d.value = ""));
    // hiển thị thông báo nhập thành công
    alert("Data saved successfully!");

    // Lấy thông tin trong session storage
    // lấy dữ liệu trong session với key là person và chuyển từ JSON thành ọbj
    let getData = JSON.parse(sessionStorage.getItem("person"), undefined, 4);
    // chuyển từ obj thành arr với phần tử 0 là key obj và 1 là obj thông tin người dùng
    let arrOfData = Object.entries(getData);

    // Xử lí và hiển thị thông tin vừa nhập

    let player = document.querySelector(".player-info");

    // kiểm tra và xóa thẻ (.info) trong HTML là thẻ con của (.player-info)
    let check = document.querySelectorAll(".info");
    if (check.length !== 0) {
      check.forEach((c) => player.removeChild(c));
    }

    // Tạo lại thẻ (.info) mới với mỗi dữ liệu có trong mảng vừa đc chuyển đổi
    for (let j = 0; j < arrOfData.length; j++) {
      let info = document.createElement("div");
      info.className = `info index-${j}`;
      info.style.width = "100%";
      info.style.display = "flex";
      info.style.alignItems = "center";
      info.style.justifyContent = "flex-start";
      info.style.backgroundColor = "#e5c3bc";
      info.style.fontSize = "30px";
      player.appendChild(info);

      let nameAndTime = document.createElement("div");
      nameAndTime.style.marginLeft = "5%";
      nameAndTime.style.width = "15%";
      info.appendChild(nameAndTime);

      let name = document.createElement("p");
      name.textContent =
        arrOfData[j][1].firstName + " " + arrOfData[j][1].lastName;
      name.style.margin = "25px 0px 10px 0";

      let time = document.createElement("p");
      time.textContent = arrOfData[j][1].timeCreated;
      time.style.fontSize = "15px";
      time.style.color = "#615454";

      nameAndTime.appendChild(name);
      nameAndTime.appendChild(time);

      let country = document.createElement("p");
      country.className = "country";
      country.style.width = "20%";
      country.style.textAlign = "center";
      country.textContent = arrOfData[j][1].country;
      info.appendChild(country);

      let score = document.createElement("p");
      score.className = `score-${j}`;
      score.style.width = "20%";
      score.style.textAlign = "center";
      score.textContent = arrOfData[j][1].playerScore;
      info.appendChild(score);

      let option = document.createElement("div");
      option.className = "option";
      option.style.width = "40%";
      option.style.textAlign = "right";
      option.style.marginRight = "7%";

      let numbersOfOp = 3;
      for (let i = 0; i < numbersOfOp; i++) {
        let but = document.createElement("button");
        but.style.borderRadius = "20px";
        but.style.padding = "5px";
        but.style.border = "1px";
        but.style.marginRight = "6px";
        but.style.width = "50px";
        but.style.textAlign = "center";
        but.style.cursor = "pointer";
        if (i == 0) {
          but.className = "remove";
          but.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else if (i == 1) {
          but.className = "incre";
          but.textContent = "+5";
        } else {
          but.className = "des";
          but.textContent = "-5";
        }
        option.appendChild(but);
      }
      info.appendChild(option);
    }

    // xử lí khi ấn vào từng nút trên mỗi hàng
    remove = document.querySelectorAll(".remove");
    incre = document.querySelectorAll(".incre");
    des = document.querySelectorAll(".des");

    for (let i = 0; i < remove.length; i++) {
      remove[i].addEventListener("click", () => {
        player.removeChild(document.querySelector(`.index-${i}`));
        delete objData[arrOfData[i][0]];
        // cập nhật lại value của person trong session
        sessionStorage.setItem("person", JSON.stringify(objData, undefined, 4));
      });
    }

    for (let i = 0; i < incre.length; i++) {
      incre[i].addEventListener("click", () => {
        let point = document.querySelector(`.score-${i}`);
        let num = Number(point.textContent) + 5;
        point.textContent = num;
        objData[arrOfData[i][0]]["playerScore"] = num;
        sessionStorage.setItem("person", JSON.stringify(objData, undefined, 4));
      });
    }

    for (let i = 0; i < des.length; i++) {
      des[i].addEventListener("click", () => {
        let point = document.querySelector(`.score-${i}`);
        let num = Number(point.textContent) - 5;
        if (num < 0) num = 0;
        point.textContent = num;
        objData[arrOfData[i][0]]["playerScore"] = num;
        sessionStorage.setItem("person", JSON.stringify(objData, undefined, 4));
      });
    }
  }
});
