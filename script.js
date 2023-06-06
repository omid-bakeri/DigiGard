"use strict";

const search = document.getElementById("search");
const search_button = document.getElementById("search_button");
const message = document.querySelector(".message");
const main_pop = document.getElementById("main-pop");
const loading = document.getElementById("loading");
const form = document.querySelector(".form");
const title_product = document.querySelector(".title_product");
const message_t = document.getElementById("message-text");
const results = document.getElementById("results");
const products_elements = document.getElementById("products-elements");
const goods = document.querySelector(".goods-product");
const forms = document.getElementById("forms");

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

//  dark mode and light mode

// -----------------------------------------------------------------------------------------

// async await api implementation

const showProductsElements = async function (goods) {
  try {
    const res = await fetch(
      `https://one-api.ir/digikala/?token=274908:641729abd8413&action=search&q=${goods}&page=1`
    );
    let repone = res.json();
    repone.then((data) => {
      let prod = data.result;
      showProductsElemetsVlaues(prod);
      // for (let i = 0; i <= 20; i++) {
      //   console.log(prod[i]);
      // }

      //   title_product.textContent = data[0].title_fa;

      for (let i = 0; i <= 20; i++) {
        let html = `<div
                class="h-24 products goods-product dark:hover:bg-gray-700 border-b-xl dark:bg-[#0f172a] border border-gray-400 flex justify-right pr-4 items-center w-full bg-DigiWhiteLevel3 p-1 text-white transiton hover:duration-500 animation hover:cursor-pointer hover:bg-gray-200"
              >
                <img
                  src=${prod[i].images.main}
                  alt="image-digigard"
                  class="image p-10 w-14 h-14 rounded-full bg-DigiRed "
                />
                <div class="flex flex-col space-y-2">
                  <h3
                    class="title_products elementTitle dark:text-white text-DigiBlack font-bold pr-4 text-sm"
                  >
                    ${prod[i].title_fa}
                  </h3>
                  <p
                    class="text-DigiWhiteLevel5 font-small pr-4 text-sm dark:text-[#0ea5e9"
                  >
                    ${prod[i].category_title}
                  </p>
                </div>
              </div>`;
        loading.classList.add("hidden");
        results.classList.remove("hidden");
        products_elements.classList.remove("hidden");
        form.insertAdjacentHTML("afterbegin", html);

        // const product_detail = document.querySelector(".product-detail");
        // products_elements.addEventListener("click", () => {
        //   // product_detail.classList.remove("hidden");
        //   // elementViewProduct(data);
        // });
      }
    });
    if (!res.ok) {
      throw new Error("خطایی رخ داده است");
    }
    // let prod = data.data;
    // return prod;

    // prod = {
    //   id: prod.id,
    //   title: prod.title,
    //   publisher: prod.publisher,
    //   sourceUrl: prod.sourceUrl,
    //   image: prod.image_url,
    //   brand: prod.brand,
    //   category: prod.category,
    //   cost: prod.cost,
    // };
  } catch (err) {
    console.log(err);
    alert("مشکلی به وجود آمده است.");
  }
};

// search button clicked addEventListener

search_button.addEventListener("click", () => {
  if (search.value.length == 0) {
    alert("فیلد جست و جو نمی تواند خالی باشد");
  } else {
    message_t.classList.add("hidden");
    main_pop.classList.remove("hidden");
    loading.classList.toggle("hidden");
    showProductsElements(search.value);
  }
});

// products show implementation

const showProductsElemetsVlaues = function (data) {
  products_elements.addEventListener("click", () => {
    console.log(data[5]);
    forms.classList.remove("hidden");
    let markup = `
      <div id="" class="grid for grid-cols-4 gap-1">
              <div class="product-specification col-span-3 p-4">
                <div class="grid grid-cols-2">
                  <div class="flex-flex-col">
                    <div class="flex items-center space-x-4">
                      <div
                        class="product-title font-bold dark:text-white text-3xl pt-1"
                      >
                        عنوان محصول
                      </div>
                    </div>
                    <h5
                      class="pt-4 product-category title-category dark:text-gray-400 font-medium text-gray-500"
                    >
                      دسته بندی
                    </h5>
                    <p
                      class="product-text pt-6 text-gray-400 dark:text-gray-300 max-w-xl"
                    >
                      امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید"
                      تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
                      تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود
                      مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی
                      خریداری‌شده را مرجوع کنید.
                    </p>
                    <h5
                      class="pt-8 product-brand title-category text-xl dark:text-gray-400 font-medium text-gray-500"
                    >
                      برند :
                    </h5>
                    <a
                      href="#"
                      class="pt-4 mt-4 product-more-information block title-link dark:text-blue-400 text-xl font-medium text-blue-600"
                      >اطلاعات بیشتر</a
                    >
                  </div>
                </div>
                <div
                  class="text-xl mt-4 p-6 flex flex-col max-w-xl font-bold rounded-xl border border-gray-400"
                >
                  <a
                    href="#"
                    class="pt-4 mt-4 title-link text-xl font-medium text-DigiRed"
                    >مشاهده نظر کارشناس درباره کالا</a
                  >

                  <a
                    href="#"
                    class="pt-4 mt-4 title-link text-xl font-medium text-DigiRed"
                    >مشاهده مشخصات فنی کالا</a
                  >

                  <a
                    href="#"
                    class="pt-4 mt-4 mb-4 title-link text-xl font-medium text-DigiRed"
                    >مقایسه کالاها</a
                  >
                </div>
              </div>
              <div class="grid-cols-1 grid">
                <div
                  class="flex flex-col justify-start items-center row-span-5 space-y-4"
                >
                  <img
                    src="#"
                    class="w-56 product-image h-56 rounded-full border border-DigiRed bg-DigiRed"
                    alt="image-product"
                  />
                  <div
                    class="text-DigiRed product-count select-none text-center dark:text-red-400 font-medium pt-4"
                  >
                    تنها 3 عدد باقی مانده
                  </div>
                </div>
                <button
                  class="justify-self-end produst-price text-xl font-bold ml-8 select-none rounded-lg px-12 text-green-300 bg-green-800 items-center justify-center"
                >
                  320000 تومان
                </button>
              </div>
              <div
                class="grid-cols-4 grid col-span-5 gap-4 justify-between items-center w-full h-24"
              >
                <div
                  class="right col-span-3 pr-4 text-gray-500 dark:text-gray-400"
                >
                  برنامه نویس و طراحی : robert.minia01@gmail.com
                </div>
                <div
                  class="flex space-y-0 p-4 ml-3 items-center justify-between"
                >
                  <i
                    class="ph-fill ph-telegram-logo element-icon text-4xl text-blue-400 dark:text-blue-300"
                  ></i>
                  <i
                    class="ph-fill ph-instagram-logo element-icon text-4xl text-orange-500 dark:text-orange-400"
                  ></i>
                  <i
                    class="ph-fill ph-twitter-logo element-icon text-4xl text-blue-400 dark:text-blue-300"
                  ></i>
                  <i
                    class="ph-fill ph-youtube-logo element-icon text-4xl text-red-500 dark:text-red-400"
                  ></i>
                  <i
                    class="ph-fill ph-linkedin-logo element-icon text-4xl text-blue-600 dark:text-blue-500"
                  ></i>
                </div>
              </div>
            </div>
  `;
    //one-api.ir/digikala/?token={token}&action=product&id={id}
    https: forms.insertAdjacentHTML("afterbegin", markup);
  });
};
