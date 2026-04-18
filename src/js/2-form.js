const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

// 🔹 1. Відновлення даних із localStorage
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  } catch (e) {
    console.log("Invalid storage data");
  }
}

// 🔹 2. Input (делегування)
form.addEventListener("input", (event) => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 🔹 3. Submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, message } = formData;

  // перевірка
  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  // очищення
  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: "",
    message: "",
  };

  form.reset();
});