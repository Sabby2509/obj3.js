let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []},
    ],
   creaPunteggio: function(){
    this.players.forEach(giocatore => {
      for (let i = 1; i <= 10 ; i++) {
        giocatore.scores.push(Math.floor(Math.random()*(10 - 1 + 1)+ 1)) ;
      }
      console.log(giocatore.scores);
      
    })
   },
nuovoGiocatore

}


bowling.creaPunteggio()