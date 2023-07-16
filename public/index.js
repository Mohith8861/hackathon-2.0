const submit = document.getElementById("submitBtn");
const married = document.getElementById("Married");
const age = document.querySelector("#Age");
const gender = document.getElementById("Gender");
const residency = document.getElementById("Residency");
const heartdisease = document.getElementById("heartdisease");
const BMI = document.getElementById("BMI");
const glucose = document.getElementById("glucose");
const mod = document.querySelector(".mod");
const modalText = document.querySelector(".modalText");
const close = document.querySelector(".close");
const render = function (data) {
  modalText.innerHTML = `<p>${data}</p>`;
};
// const data = {
//     age: age.value,
//     married: married.value,
//     gender: gender.value,
//     residency: residency.value,
//     heartdisease: heartdisease.value,
//     glucose: glucose.value,
//     BMI: BMI.value,
//   };
submit.addEventListener("click", () => {
  const url = `http://127.0.0.1:3000/stroke?age=${age.value}&married=${married.value}&gender=${gender.value}&residency=${residency.value}&heartdisease=${heartdisease.value}&glucose=${glucose.value}&BMI=${BMI.value}`;
  mod.classList.remove("hidden");
  y = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      render(`${data.slice(1).join(" ")}`);
    });
});

close.addEventListener("click", (el) => {
  mod.classList.add("hidden");
});
