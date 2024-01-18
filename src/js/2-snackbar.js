import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stateInput = document.querySelector('input[name="state"]:checked');

  if (!delayInput.checkValidity() || !stateInput) {
    iziToast.error({
      title: "Error",
      message: "Please enter a valid delay and select a state.",
      position: "topRight",
    });
    return;
  }

  const delay = parseInt(delayInput.value, 10);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: "Fulfilled",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Rejected",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });
});
