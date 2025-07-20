function showMessage() {
  const randomNumber = Math.floor(Math.random() * 5); // 0 se 4 tak

  let message = "";

  switch (randomNumber) {
      case 0:
          message = "Tumhare dimaag mein khana chal raha hai 😋";
          break;
      case 1:
          message = "Tum abhi coding ke baare mein soch rahe ho 💻";
          break;
      case 2:
          message = "Tum kaafi talented ho, believe in yourself 💡";
          break;
      case 3:
          message = "Tumhara favourite color blue ho sakta hai 🎨";
          break;
      case 4:
          message = "Shayad tum abhi kuchh seekhne ke mood mein ho 📚";
          break;
      default:
          message = "Main soch nahi paayi! 😅";
  }

  document.getElementById("message").innerText = message;
}