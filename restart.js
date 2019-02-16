function restart() {
  /*
    if(confirm("Restart?")){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });*/
  console.log("went into restart");
  const modal = document.querySelector("#modal-asklogin");
  M.Modal.getInstance(modal).close();
  return restartLove();
}
