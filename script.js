let tablesDiv = document.getElementById('tables');

for (let i = 1; i <= 10; i++) {
  tablesDiv.innerHTML += `<h3>Table de ${i}</h3>`;
  for (let j = 1; j <= 10; j++) {
    tablesDiv.innerHTML += `${i} x ${j} = ${i * j} <br>`;
  }
  tablesDiv.innerHTML += "<hr>";
}