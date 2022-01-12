class flipcoin {
     coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}
}
module.exports=(flipcoin)