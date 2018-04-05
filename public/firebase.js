herc.Firebase = class{

  constructor() {
    // Firebase SDK.
    this.database = firebase.database();
    this.storage = firebase.storage();
    this.auth = firebase.auth();

    // Firebase references that are listened to.
    this.firebaseRefs = [];
  }



  putProjects(){
    const projectObject = {
      name: commentText,
      company: firebase.database.ServerValue.TIMESTAMP,
      author: {
        uid: this.auth.currentUser.uid,
        full_name: this.auth.currentUser.displayName,
        profile_picture: this.auth.currentUser.photoURL
      }
    };
    return this.database.ref(`projects`).update();
  };

  getProjectById(id)

};
herc.firebase = new herc.Firebase();