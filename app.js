// Firebase configuration
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//     databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_PROJECT_ID.appspot.com",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  


  // Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBsjuBO5JWE3ub7-mdCXQ20ZXcHiYnaXsg",
  //   authDomain: "todoapp-7c920.firebaseapp.com",
  //   projectId: "todoapp-7c920",
  //   storageBucket: "todoapp-7c920.firebasestorage.app",
  //   messagingSenderId: "729485151929",
  //   appId: "1:729485151929:web:066d14b3e2dc8ca7379568"
  // };





// Initialize Firebase
//   const app = firebase.initializeApp(firebaseConfig);
//   const database = firebase.database(app);
  
//   DOM Elements
//   const todoInput = document.getElementById("todo-input");
//   const todoList = document.getElementById("todo-list");
  
//   Add a new Todo
//   function addTodo() {
//     const todoText = todoInput.value.trim();
//     if (todoText) {
//       const todoRef = database.ref("todos").push();
//       todoRef.set({ text: todoText });
//       todoInput.value = "";
//     }
//   }
  
//   Fetch Todos from Firebase
//   database.ref("todos").on("value", (snapshot) => {
//     todoList.innerHTML = ""; // Clear list
//     snapshot.forEach((childSnapshot) => {
//       const todo = childSnapshot.val();
//       const todoId = childSnapshot.key;
  
//       const li = document.createElement("li");
//       li.textContent = todo.text;
  
//       const deleteBtn = document.createElement("button");
//       deleteBtn.textContent = "Delete";
//       deleteBtn.onclick = () => deleteTodo(todoId);
  
//       li.appendChild(deleteBtn);
//       todoList.appendChild(li);
//     });
//   });
  
//   Delete a Todo
//   function deleteTodo(id) {
//     database.ref("todos/" + id).remove();
//   }
  

























// Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };


const firebaseConfig = {
  apiKey: "AIzaSyBsjuBO5JWE3ub7-mdCXQ20ZXcHiYnaXsg",
  authDomain: "todoapp-7c920.firebaseapp.com",
  projectId: "todoapp-7c920",
  storageBucket: "todoapp-7c920.firebasestorage.app",
  messagingSenderId: "729485151929",
  appId: "1:729485151929:web:066d14b3e2dc8ca7379568"
};




// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// DOM Elements
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Add a new Todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todoRef = database.ref("todos").push();
    todoRef.set({ text: todoText });
    todoInput.value = "";
  }
}

// Fetch Todos from Firebase
database.ref("todos").on("value", (snapshot) => {
  todoList.innerHTML = ""; // Clear list
  snapshot.forEach((childSnapshot) => {
    const todo = childSnapshot.val();
    const todoId = childSnapshot.key;

    const li = document.createElement("li");
    li.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(todoId);

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
});

// Delete a Todo
function deleteTodo(id) {
  database.ref("todos/" + id).remove();
}