 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAIdzX3b8OpQllJ2QB1ubhC0DVIJGZi9-o",
  authDomain: "task-planner-14f93.firebaseapp.com",
  databaseURL: "https://task-planner-14f93.firebaseio.com",
  projectId: "task-planner-14f93",
  storageBucket: "task-planner-14f93.appspot.com",
  messagingSenderId: "662070204548"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase