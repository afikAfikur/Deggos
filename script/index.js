const starup = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories",
  );
  const data = await res.json();
  const ar = data.data.map((element) => element.category);
  printing(ar);
};
const printing = (ar) => {
  const hednav = document.getElementById("firs-sec-container");
  ar.forEach((element) => {
    const btn = document.createElement("button");
    btn.classList.add(
      "btn",
      "btn-sm",
      "w-fit",
      "bg-base-200",
      "border",
      "border-base-300",
      "rounded-xl",
      "font-bold",
      "px-2",
    );

    btn.innerText = element;
    hednav.appendChild(btn);
  });
};

starup();
