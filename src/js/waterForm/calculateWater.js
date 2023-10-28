const calculateWater = () => {
  const urine = document.querySelector(".input-urine").value;
  const uf24 = document.querySelector(".input-uf24").value;
  const result = parseFloat(urine) + parseFloat(uf24);

  return result;
};

export default calculateWater;
