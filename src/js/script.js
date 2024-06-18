function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  
  if (name === '' || email === '' || age === '') {
    alert("Todos os campos devem ser preenchidos.");
    return false;
  }

  const ageNumber = parseInt(age, 10); 
  if (isNaN(ageNumber) || ageNumber <= 0) {
    alert("Por favor, insira uma idade válida.");
    return false;
  }

  return true;
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');
    const age = params.get('age');

    if (name && email && age) {
      const result = `Nome: ${name}, Email: ${email}, Idade: ${age}`;
      document.getElementById('result').textContent = result;
    }
  };
