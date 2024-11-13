  // // Import Firebase modules for Firestore and app initialization
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js";
  // import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/7.17.2/firebase-firestore.js";

  // // Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBsjuBO5JWE3ub7-mdCXQ20ZXcHiYnaXsg",
  //   authDomain: "todoapp-7c920.firebaseapp.com",
  //   projectId: "todoapp-7c920",
  //   storageBucket: "todoapp-7c920.firebasestorage.app",
  //   messagingSenderId: "729485151929",
  //   appId: "1:729485151929:web:066d14b3e2dc8ca7379568"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);  // Initialize Firestore

  // var ulElement = document.getElementById("list");

  // // Fetch and display todos from Firestore
  // async function fetchTodos() {
  //   const todosSnapshot = await getDocs(collection(db, "todos"));
  //   ulElement.innerHTML = '';  // Clear existing list
  //   todosSnapshot.forEach((doc) => {
  //     const todo = doc.data();
  //     const liElement = document.createElement("li");
  //     const liText = document.createTextNode(todo.text);
  //     liElement.appendChild(liText);

  //     // Create delete button
  //     var delBtnElement = document.createElement("button");
  //     var delBtnText = document.createTextNode("Delete");
  //     delBtnElement.appendChild(delBtnText);
  //     delBtnElement.setAttribute("onclick", () => deleteSingleTodo(doc.id));
  //     liElement.appendChild(delBtnElement);

  //     // Create edit button
  //     var editBtnElement = document.createElement("button");
  //     var editBtnText = document.createTextNode("Edit");
  //     editBtnElement.appendChild(editBtnText);
  //     editBtnElement.setAttribute("onclick", () => editSingleTodo(doc.id, todo.text));
  //     liElement.appendChild(editBtnElement);

  //     ulElement.appendChild(liElement);
  //   });
  // }

  // // Add a new todo to Firestore
  // async function addTodo() {
  //   var input = document.getElementById("input");

  //   if (input.value) {
  //     try {
  //       await addDoc(collection(db, "todos"), {
  //         text: input.value
  //       });
  //       input.value = ""; // Clear the input
  //       fetchTodos(); // Refresh the todo list
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   } else {
  //     alert("Enter items..");
  //   }
  // }

  // // Delete all todos from Firestore
  // async function deleteAllTodos() {
  //   const todosSnapshot = await getDocs(collection(db, "todos"));
  //   todosSnapshot.forEach(async (doc) => {
  //     await deleteDoc(doc.ref);
  //   });
  //   fetchTodos(); // Refresh the todo list
  // }

  // // Delete a single todo from Firestore
  // async function deleteSingleTodo(todoId) {
  //   try {
  //     await deleteDoc(doc(db, "todos", todoId));
  //     fetchTodos(); // Refresh the todo list
  //   } catch (e) {
  //     console.error("Error deleting todo: ", e);
  //   }
  // }

  // // Edit a single todo in Firestore
  // async function editSingleTodo(todoId, currentText) {
  //   const updateVal = prompt("Enter updated value", currentText);
  //   if (updateVal) {
  //     try {
  //       const todoDocRef = doc(db, "todos", todoId);
  //       await updateDoc(todoDocRef, {
  //         text: updateVal
  //       });
  //       fetchTodos(); // Refresh the todo list
  //     } catch (e) {
  //       console.error("Error updating todo: ", e);
  //     }
  //   }
  // }



















// var ulElement = document.getElementById("list");

// function addTodo() {

//   var input = document.getElementById("input");

//   if (input.value) {
//     var liElement = document.createElement("li");

//     var liText = document.createTextNode(input.value);

//     liElement.appendChild(liText);

//     // delete button create

//     var delBtnElement = document.createElement("button");

//     var delBtnText = document.createTextNode("Delete");

//     delBtnElement.appendChild(delBtnText);

//     delBtnElement.setAttribute("onclick", "deleteSingleTodo(this)");

//     liElement.appendChild(delBtnElement);

//     // edit button create

//     var EditBtnElement = document.createElement("button");

//     var EditBtnText = document.createTextNode("Edit");

//     EditBtnElement.appendChild(EditBtnText);

//     liElement.appendChild(EditBtnElement);

//     EditBtnElement.setAttribute("onclick", "editSingleTodo(this)");
//     ulElement.appendChild(liElement);
//     input.value = "";
//   } else {
//     alert("Enter items..");
//   }
// }

// function deleteAllTodos() {

//   ulElement.innerHTML = "";

// }

// function deleteSingleTodo(e) {

//   console.log(e.parentNode.remove());

// }

// function editSingleTodo(e) {
 
//   var updateVal = prompt("Enter updated value ");

//   e.parentNode.firstChild.nodeValue = updateVal;

// }
