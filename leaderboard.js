var theLeaderBoardHtml;

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
