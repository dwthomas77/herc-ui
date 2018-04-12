herc.Firebase = class {

  constructor() {
    const db = firebase.firestore();
    this.projectRef = db.collection('projects');
    this.companyRef = db.collection('companies');
    this.appointmentsRef = db.collection('appointments');
  }

  getPropjects() {
    return this.projectRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }

  getCompanies() {
    return this.companyRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }

  getAppointments() {
    return this.appointmentsRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }

};
herc.firebase = new herc.Firebase();
