function converter() {
  const binary = document.getElementById("binaryInput").value;
  if (binary == "") return alert("Please enter a binary number");
  binary.split("").map((char) => {
    if (char !== "0" && char !== "1")
      return alert("Please enter a binary number");
  });

  const decimal = parseInt(binary, 2);
  document.getElementById("decimalOutput").value = decimal;
  return true;
}
