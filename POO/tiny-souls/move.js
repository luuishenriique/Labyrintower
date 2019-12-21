class move extends world{
	move(x, y) {
                    let movePlayer = () => {
                        this.world[this.player[1]][this.player[0]] = ' '
                        this.player[0] += x
                        this.player[1] += y
                        this.world[this.player[1]][this.player[0]] = 'P'
                        this.time++
                    }
                    let nextPos = this.world[this.player[1] + y][this.player[0] + x]
                    if(nextPos[0] == ' ') {
                        movePlayer()
                    } else if (nextPos[0] == 'X') {
                        // encontrou inimigo e sessão de ataques player x monster
                        let hatck = Math.floor(Math.random() * 3) + 1
                        let matck = Math.floor(Math.random() * 3) + 1 + (this.xp * 2)
                        let mhp = nextPos.split(':')[1]
                        mhp-= hatck
                        // se o player morrer
                        if (this.hp <= 0) {
                            alert("Você morreu! tente novamente.")
                            location.reload();
                        }
                        // se o monstro morrer remove seu espaço no mapa e deixa área livre
                        if (mhp <= 0) {
                            this.world[this.player[1] + y][this.player[0] + x] = ' '
                            this.xp++
                            movePlayer()
                        // ataque efetivo do monstro ao player
                        } else {
                            this.world[this.player[1] + y][this.player[0] + x] = `X:${mhp}`
                            this.hp-= matck
                        }
                    } else if (nextPos[0] == 'I') {
                        // encontrou baú de itens
                        this.world[this.player[1] + y][this.player[0] + x] = ' '
                        this.xp+=Math.floor(Math.random() * 4) + 1
                        this.hp+=Math.floor(Math.random() * 4) + 1
                        qtdBau = 5;
                        n = Math.floor(Math.random() * qtdBau) + 1
                        if (this.haveKey == true) {
                            return
                        } else if (n > qtdBau - 1 || qtdBau == 0 || n < 0) {
                            this.haveKey = true
                        } else {
                            // chance aleatória para báu com chave dentro do mapa
                            do{
                               n = Math.floor(Math.random() * qtdBau - 1)
                           } while (this.haveKey = false)
                       }
                       console.log(n)
                       movePlayer()
                   } else if (nextPos[0] == 'E') {
                    // encontrou a saída 
                    if (this.haveKey == true) {
                        // se tiver a chave habilita a saída para o jogador e emite alert
                        this.world[this.player[1] + y][this.player[0] + x] = ' '
                        movePlayer()
                        alert("Parabéns! você conseguiu :D")
                        location.reload()
                    } else {
                        // se não encontrou a chave emite alert para retornar
                        alert("É necessário encontrar uma chave para sair!")
                    }
                }
}