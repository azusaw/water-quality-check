const functions = require("firebase-functions");

// sample
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

const admin = require("firebase-admin");

// use firestore
admin.initializeApp(functions.config().firebase);
const fireStore = admin.firestore();

exports.getFirestore = functions.https.onRequest((req, res) => {
  const params = req.body;
  // get document ID from params
  const documentId = params.documentId;

  if (documentId) {
    const testRef = fireStore.collection("test");
    testRef
      .doc(documentId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          res.status(200).send(doc.data());
        } else {
          res.status(200).send("document not found");
        }
      });
  } else {
    res.status(400).send({ errorMessage: "document id not found" });
  }
});

// Validate params
const validateParamsSchema = (params) =>
  "documentId" in params &&
  "userId" in params &&
  "ph" in params &&
  "quality" in params;

// save data in firestore
exports.saveFirestore = functions.https.onRequest((req, res) => {
  const params = req.body;
  // パラメータのスキーマのチェック
  if (!validateParamsSchema(params)) {
    res.status(400).send({ errorMessage: "params error" });
  } else {
    const db = fireStore;
    db.doc(`test/${params.documentId}`).set({
      userId: params.userId,
      date: new Date().getTime(),
      geopoint: [1, 1],
      ph: params.ph,
      quality: params.quality,
    });

    // 非同期的に保存したデータを参照する
    db.collection("test")
      .doc(params.documentId)
      .onSnapshot((doc) => {
        // return data
        res.status(200).send(doc.data());
      });
  }
});
