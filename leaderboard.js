var theLeaderBoardHtml;

// Run the leaderboard function
document
  .getElementById("section4")
  .addEventListener("click", e => {
    e.preventDefault();
    console.log("running from leaderboard");
    getLeaderBoard();
  })
  .catch(function(error) {
    console.log("Error getting fucks:", error);
  });

function getLeaderBoard() {
  db.collection("users")
    .orderBy("fucks", "desc")
    .get()
    .then(snapshot => {
      i = 1;
      var leaderBoardHtml =
        "<table><thead><tr><th>Ranking</th><th>Name</th><th>Fucks Given</th></tr></thead><tbody>";
      snapshot.docs.forEach(doc => {
        //console.log(doc.data().name + " fucks: " + doc.data().fucks);
        leaderBoardHtml +=
          "<tr><td>" +
          i +
          "</td><td>" +
          doc.data().name +
          "</td><td>" +
          doc.data().fucks +
          "</td></tr>";
        i++;
      });
      leaderBoardHtml += "</tbody></table>";
      //document.getElementById("section4").innerHTML = `${leaderBoardHtml}`;
      //console.log(leaderBoardHtml);
      theLeaderBoardHtml = leaderBoardHtml;
    });
}
