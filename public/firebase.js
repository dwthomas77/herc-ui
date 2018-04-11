herc.Firebase = class{

  constructor() {
    const projectRef = db.collection("projects");
    const companyRef = db.collection("companies");
    const appointmentsRef = db.collection("appointments");
  }

  getPropjects(){

    return
  }

  putProjects(){
    const projectObj = {
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

  getProjectById(id);

};
herc.firebase = new herc.Firebase();