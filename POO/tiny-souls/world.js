
class world{
	// constantes de largura e altura do mundo
    const w = 75;
    const h = 30;
    // utilizando o vue e usando elementos como objeto
    let game = new Vue({
        el: '#game',
        data: {
            world: [],
            player: [1, 1],
            hp: 5,
            xp: 0,
            time: 0,
            haveKey: false
        },  
        // gerador de mapa no array
        mounted: function() {
            this.world = this.generate();
            console.log(this.world.map(col => col.join('')).join('\n'))
            this.$el.focus()
        },
        methods: {
            // método de criação de paredes no array 
            generate() {
                let world = []
                for (let i = 0; i < h; i++) {
                    world.push([])
                    for (j = 0; j < w; j++) {
                        world[i].push('#')
                    }
                }

                    // let x = Math.round(Math.random() * w)
                    // let y = Math.round(Math.random() * h)
                    let x = y = 1

                    let dig = (x, y, xdir, ydir, v) => {
                        // console.log(x, y, xdir, ydir, v)
                        world[x][y] = ' ';
                        for (let i = 0; i < v; i++) {
                            world[x + (xdir*i)][y + (ydir*i)] = ' '
                        }
                    }
                    let xdir = ydir = v = 0
                    for (let i = 0; i < (w * h * 0.05); i++) {
                        if ((Math.random() < 0.5 && xdir == 0) || ydir != 0) {
                            ydir = 0
                            xdir = Math.random() < 0.5 ? -1 : 1;
                            v = xdir < 0 ?
                            Math.round(Math.random() * (x - 2)) :
                            Math.round(Math.random() * (h - x - 2))
                        } else {
                            xdir = 0
                            ydir = Math.random() < 0.5 ? -1 : 1;
                            v = ydir < 0 ?
                            Math.round(Math.random() * (y - 2)) :
                            Math.round(Math.random() * (w - y - 2))
                        }
                        dig(x, y, xdir, ydir, v)
                        x += (xdir * v)
                        y += (ydir * v)
                    }

                    world[this.player[0]][this.player[1]] = 'P';

                    // método para inserir os elementos ao mapa array
                    
                },
                getClass(tile) {
                    // switch que rotula cada elemento do mapa array
                    switch(tile[0]) {
                        case ' ':
                        return 'map';
                        case 'X':
                        return 'monster';
                        case 'E':
                        return 'exit';
                        case 'P':
                        return 'player';
                        case 'I':
                        return 'item';
                    }
                    return 'wall';
                },
                //movimentação do personagem
                
            }
        }
}
