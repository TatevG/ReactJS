const sum = () => {
  const inputs = document.getElementsByTagName('input');
  const radios = document.getElementsByClassName('radio');
  const n1 = Number(inputs[0].value);
  const n2 = Number(inputs[3].value);
  const sum = radios[0].checked ? n1 + n2 : n1 - n2;
  document.getElementById('result').innerHTML = sum;
};