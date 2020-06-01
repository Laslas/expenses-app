// database.ref('expenses')
//     .on(('value'))
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

database.ref('expenses').on('child_changed', (snapshot) => {
    
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_added', (snapshot) => {
    
    console.log(snapshot.key, snapshot.val())
})
// database.ref('expenses').push({
//     description: 'Flexing',
//     amount: 5467,
//     note: '',
//     createdAt: 1234567
// })


// database.ref('expenses/-M8dnTa_zTapS4KSvuEj').update({
//     stressLevel:9,
//    'job/company': 'Amazon',
//     'location/city': 'Helsinki'


// })

// database.ref().set({
//     name: 'Snubz',
//     age: 40,
//     stressLevel:6,
//     job: {
//         title: 'web developer',
//         company:'Google'
//     },
//     location: {
//         city: 'Espoo',
//         country:'Finland'
//     }
// }).then(() => {
//     console.log('hyvää')
// }).catch((e) => {
//     console.log('ei hyvää', e)
// })



// database.ref().update({
//     stressLevel:9,
//    'job/company': 'Amazon',
//     'location/city': 'Helsinki'


// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is ${val.age} years old, he lives in ${val.location.city} and he is a  ${val.job.title}`)
// })