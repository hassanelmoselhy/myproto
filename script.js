document.addEventListener("DOMContentLoaded", () => {
  const text = "i am Web Developer";
  const target = document.getElementById("typed-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);  
    }
  }

  type();
});
