const calculateUF = () => {
  const dialisisData = document.querySelectorAll(".dialisis-equivalent");
  let total = 0;

  dialisisData.forEach((data) => {
    const value = data.textContent;
    total += parseFloat(value);
  });

  return total;
};

export default calculateUF;
