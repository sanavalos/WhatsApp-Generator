const image = document.querySelector("img");
image.src === "http://127.0.0.1:5500/index.html"
  ? (image.src =
      "https://www.ole.com.ar/images/2022/12/13/lNjig2fRy_400x400__1.jpg")
  : (image.src = image.src);

const nameChat = document.getElementById("name");
nameChat.textContent === ""
  ? (nameChat.textContent = "Leo Messi")
  : (nameChat.textContent = nameChat.textContent);

var chatContainer = document.getElementById("chat");
let input = document.querySelector("input");
const msgMic = document.getElementById("msg-mic");

msgMic.addEventListener("click", updateValue);

var firstSender = true;
var firstRecieved = true;

function updateValue() {
  if (input.value.startsWith("NAME:"))
    nameChat.textContent = input.value.slice(5);
  if (input.value.startsWith("IMAGE:")) image.src = input.value.slice(6);
  if (firstSender && input.value.startsWith("RIGHT:")) {
    chatContainer.innerHTML += `<div class='message sent-first'>${input.value.slice(
      6
    )}<span class='metadata'><span class='time'>10:05 p.m.</span><span class='tick'><svg xmlns=http://www.w3.org/2000/svg width='16' height= '15'  id= 'msg-dblcheck-ack'  x= '2063'  y= '2076' ><path d= M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z  fill= #4fc3f7 /></svg></span> </span></div>`;
    firstSender = false;
  } else if (!firstSender && input.value.startsWith("RIGHT:")) {
    chatContainer.innerHTML += `<div class="message sent-after">${input.value.slice(
      6
    )}<span class="metadata">  <span class="time">10:05 p.m.</span><span class="tick"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span> </span></div>`;
    firstRecieved = true;
  } else if (firstRecieved && input.value.startsWith("LEFT:")) {
    chatContainer.innerHTML += `<div class="message received-first">${input.value.slice(
      5
    )}<span class="metadata"><span class="time">10:07 p.m.</span></span></div>`;
    firstRecieved = false;
  } else if (!firstRecieved && input.value.startsWith("LEFT:")) {
    chatContainer.innerHTML += `<div class="message received-after">${input.value.slice(
      5
    )}<span class="metadata"><span class="time">10:27 p.m.</span></span></div>`;
  }
  msgMic.classList.remove("zmdi-mail-send");
  msgMic.classList.add("zmdi-mic");
  input.value = "";
}

function showImg() {
  if (input.value == "") {
    msgMic.classList.add("zmdi-mic");
  } else if (input.value !== "") {
    msgMic.classList.remove("zmdi-mic");
    msgMic.classList.add("zmdi-mail-send");
  }
}
