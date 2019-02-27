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
        if (userCred != null) {
          if (doc.id === userCred.uid) {
            leaderBoardHtml +=
              "<tr style='background-color:#90caf9;'><td>" +
              i +
              "</td><td>" +
              doc.data().name +
              " (you)" +
              "</td><td>" +
              doc.data().fucks +
              "</td></tr>";
            i++;
          } else {
            leaderBoardHtml +=
              "<tr><td>" +
              i +
              "</td><td>" +
              doc.data().name +
              "</td><td>" +
              doc.data().fucks +
              "</td></tr>";
            i++;
          }
        } else {
          leaderBoardHtml +=
            "<tr><td>" +
            i +
            "</td><td>" +
            doc.data().name +
            "</td><td>" +
            doc.data().fucks +
            "</td></tr>";
          i++;
        }
      });
      leaderBoardHtml += "</tbody></table>";
      //document.getElementById("section4").innerHTML = `${leaderBoardHtml}`;
      //console.log(leaderBoardHtml);
      theLeaderBoardHtml = leaderBoardHtml;
    });
}
