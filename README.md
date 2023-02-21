# get firestore data
curl http://127.0.0.1:5001/water-quality-check-ab451/us-central1/getFirestore --data 'documentId=0001'

# put data to firestore
curl http://127.0.0.1:5001/water-quality-check-ab451/us-central1/saveFirestore --data 'documentId=0001&userId=1000&ph=8.2&quality=50'