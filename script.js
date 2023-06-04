"use strict";

const search = document.getElementById("search");
const search_button = document.getElementById("search_button");
const message = document.querySelector(".message");
const main_pop = document.getElementById("main-pop");
const loading = document.getElementById("loading");
const form = document.querySelector(".form");
const title_product = document.querySelector(".title_product");
// api implementation

// https://one-api.ir/digikala/?token={token}&action=search&q={query}&page={page}
// 274908:641729abd8413

let data;
const DigiGard = (goods) => {
  fetch(
    `https://one-api.ir/digikala/?token=274908:641729abd8413&action=search&q=${goods}&page=`
  )
    .then((request) => {
      return request.json();
    })
    .then((data) => {
      data = data.result;
      console.log(data);
      elementFunc(data);
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
const elementFunc = function (data) {
  //   title_product.textContent = data[0].title_fa;
  for (let i = 0; i <= 20; i++) {
    // let html = `<div
    //                 class="h-24 border-b-xl border border-gray-400 flex justify-right pr-4 items-center w-full bg-DigiInputBG p-1 text-white transiton hover:duration-500 animation hover:cursor-pointer hover:bg-DigiElement"
    //               >
    //                 <img
    //                   src=${data[i].images.main}
    //                   alt="image-digigard"
    //                   class="image p-10 w-14 h-14 rounded-full bg-DigiRed "
    //                 />
    //                 <div class="flex flex-col space-y-2">
    //                   <h3 class="text-white font-bold pr-4 text-sm">
    //                     ${data[i].title_fa}
    //                   </h3>
    //                   <p class="text-DigiGray font-small pr-4 text-sm">
    //                    ${data[0].category_title}
    //                   </p>
    //                 </div>
    //               </div>`;
    let html = `<div
                class="h-24 products dark:hover:bg-gray-700 border-b-xl dark:bg-[#0f172a] border border-gray-400 flex justify-right pr-4 items-center w-full bg-DigiWhiteLevel3 p-1 text-white transiton hover:duration-500 animation hover:cursor-pointer hover:bg-gray-200"
              >
                <img
                  src=${data[i].images.main}
                  alt="image-digigard"
                  class="image p-10 w-14 h-14 rounded-full bg-DigiRed "
                />
                <div class="flex flex-col space-y-2">
                  <h3
                    class="title_products elementTitle dark:text-white text-DigiBlack font-bold pr-4 text-sm"
                  >
                    ${data[i].title_fa}
                  </h3>
                  <p
                    class="text-DigiWhiteLevel5 font-small pr-4 text-sm dark:text-[#0ea5e9"
                  >
                    ${data[0].category_title}
                  </p>
                </div>
              </div>`;
    form.insertAdjacentHTML("afterbegin", html);
  }
};

// search button validation
search_button.addEventListener("click", () => {
  if (search.value.length == 0) {
    alert("فیلد جست و جو نمی تواند خالی باشد");
  } else {
    message.classList.add("hidden");
    main_pop.classList.remove("hidden");
    DigiGard(search.value);
    // loading.classList.remove("hidden");
  }
});

//  dark mode and light mode

const theme_toggle = document.getElementById("theme-toggle");
const ph_moon = document.querySelector(".ph-moon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

theme_toggle.addEventListener("click", function () {
  ph_moon.classList.toggle("ph-sun");
  if (localStorage.getItem("color-theme")) {
    // If light, make dark and save in localstorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
