// 获取文字的标签

const text1313 = document.querySelector(".text-13");
const text1212 = document.querySelector(".text-12");
const text1111 = document.querySelector(".text-11");
const text1010 = document.querySelector(".text-10");
const text99 = document.querySelector(".text-9");
const text88 = document.querySelector(".text-8");
const text77 = document.querySelector(".text-7");
const text66 = document.querySelector(".text-6");
const text55 = document.querySelector(".text-5");
const text44 = document.querySelector(".text-4");
const text33 = document.querySelector(".text-3");
const text22 = document.querySelector(".text-2");
const text11 = document.querySelector(".text-1");
const text0 = document.querySelector(".text0");
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");
const text6 = document.querySelector(".text6");
const text7 = document.querySelector(".text7");
const text8 = document.querySelector(".text8");
const text9 = document.querySelector(".text9");
const text10 = document.querySelector(".text10");

// 把标签里面的内容进行切割，每个字符独立进行旋转，做成独立的 span 标签
const span = text.textContent.split("").map((item, i) => {
  // 返回切割好的文字标签
  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span2 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span3 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span4 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span5 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span6 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span7 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span8 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span9 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span10 = text2.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span0 = text0.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span11 = text11.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span22 = text22.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span33 = text33.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span44 = text44.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span55 = text55.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span66 = text66.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span77 = text77.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span88 = text88.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span99 = text99.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});

const span1010 = text1010.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span1111 = text1111.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span1212 = text1212.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});
const span1313 = text1313.textContent.split("").map((item, i) => {

  return `
    <span style="transform:rotate(${i * 6}deg)">
      ${item}
    </span>
  `;
});













// 把所有 span 文字标签再全部塞回去
text1313.innerHTML = span.join("");
text1212.innerHTML = span.join("");
text1111.innerHTML = span.join("");
text1010.innerHTML = span.join("");
text99.innerHTML = span.join("");
text88.innerHTML = span.join("");
text77.innerHTML = span.join("");
text66.innerHTML = span.join("");
text55.innerHTML = span.join("");
text44.innerHTML = span.join("");
text33.innerHTML = span.join("");
text22.innerHTML = span.join("");
text11.innerHTML = span.join("");
text0.innerHTML = span.join("");

text.innerHTML = span.join("");
text2.innerHTML = span2.join("");
text3.innerHTML = span3.join("");
text4.innerHTML = span4.join("");
text5.innerHTML = span5.join("");
text6.innerHTML = span6.join("");
text7.innerHTML = span7.join("");
text8.innerHTML = span8.join("");
text9.innerHTML = span9.join("");
text10.innerHTML = span10.join("");


























