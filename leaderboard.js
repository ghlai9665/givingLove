// create element & render cafe
/* render data reference
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    });
}*/

// Run the leaderboard function
document.getElementById("section4").addEventListener("click", e =>{
    e.preventDefault();
    console.log("running from leaderboard");
    db.collection("users").orderBy("fucks").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data().name + " fucks: " + doc.data().fucks);
      })
    }).catch(function(error) {
      console.log("Error getting fucks:", error);
  });
  });
  