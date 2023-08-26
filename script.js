document.addEventListener("DOMContentLoaded", function() {
  const generateButton = document.getElementById("generate");
  const outputPre = document.getElementById("output");
  
  generateButton.addEventListener("click", function() {
    const messageInput = document.getElementById("message");
    const colorInput = document.getElementById("color");
    
    const message = messageInput.value;
    const color = colorInput.value;
    
    const coloredMessage = `echo -e '\\x1b[38;2;${colorToRgb(color).join(";")}m${message}\\x1b[0m'`;
    
    outputPre.textContent = coloredMessage;
  });
  
  function colorToRgb(color) {
    const hex = color.slice(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }
});
