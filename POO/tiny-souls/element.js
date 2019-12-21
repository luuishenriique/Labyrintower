class element extends world{
	let addElements = (monsters, items) => {
                        let positions = []
                        for (let i = 0; i < h; i++) {
                            positions.push([])
                            for (j = 0; j < w; j++) {
                                if (world[i][j] == ' ') {
                                    positions[i].push([i, j])
                                }
                            }
                        }
                        // inserindo monstros
                        positions = positions.flat();
                        for (let i = 0; i < monsters; i++) {
                            let pos = positions[Math.round(Math.random() * positions.length)];
                            world[pos[0]][pos[1]] = 'X:4' /*adicionando vida ao monster*/
                        }
                        // inserindo baú de itens
                        for (let i = 0; i < items; i++) {
                            let pos = positions[Math.round(Math.random() * positions.length)];
                            world[pos[0]][pos[1]] = 'I'
                        }

                        // let key = Math.floor(Math.random() * [this.])

                        // inserindo saída 
                        let pos = positions[Math.round(Math.random() * positions.length)];
                        world[pos[0]][pos[1]] = 'E'

                    }
                    // colocando aleatoriamente uma determinada quantidade de elementos no mapa array
                    addElements(5 + Math.random() * 25, 18)

                    return world;
}

 