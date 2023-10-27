const calculateIngest = () => {
  const waterData = document.querySelectorAll(".equivalent-value");
  let total = 0;

  waterData.forEach((data) => {
    const value = data.textContent;
    total += parseFloat(value);
  });

  return total;
};

export default calculateIngest;
