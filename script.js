const apiURL = 'http://localhost:5000/api/users';

async function fetchUsers() {
  const res = await fetch(apiURL);
  const users = await res.json();
  const container = document.getElementById('user-list');
  container.innerHTML = users.map(u =>
    `<p>${u.name} (${u.email}, ${u.age} years old)
     <button onclick="deleteUser('${u._id}')">Delete</button></p>`
  ).join('');
}

async function addUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  if (!name || !email || !age) return alert("Please fill all fields!");

  await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, age })
  });

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('age').value = '';

  fetchUsers();
}

async function deleteUser(id) {
  await fetch(`${apiURL}/${id}`, { method: 'DELETE' });
  fetchUsers();
}

fetchUsers();
