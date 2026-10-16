const R=(c,n)=>c.repeat(n);
const PAL={'#':'--hi','w':'--hi','+':'--pur','o':'--panel2','r':'--c1','y':'--c2','g':'--c3','c':'--c4','b':'--c5'};
const SP={
  heart:['.rr...rr.','rrrr.rrrr','rrrrrrrrr','rrrrrrrrr','.rrrrrrr.','..rrrrr..','...rrr...','....r....'],
  spark:['...#...','...#...','..###..','#######','..###..','...#...','...#...'],
  coffee:['..#..#....','.#..#.....','.#######..','.#bbbbb###','.#bbbbb#.#','.#bbbbb###','..#####...','.#########'],
  star:['....y....','....y....','...yyy...','yyyyyyyyy','.yyyyyyy.','..yyyyy..','..yyyyy..','.yyy.yyy.','.yy...yy.'],
  book:['.ccccccc.','cwwwcwwwc','cwwwcwwwc','cwwwcwwwc','cwwwcwwwc','ccccccccc','.ccccccc.'],
  books:['.ggggggg.','g'+R('w',7)+'g','.ggggggg.','.ccccccc.','c'+R('w',7)+'c','.ccccccc.','.bbbbbbb.','b'+R('w',7)+'b'],
  clock:['..bbbbb..','.b'+R('o',5)+'b.','b'+R('o',3)+'y'+R('o',3)+'b','b'+R('o',3)+'y'+R('o',3)+'b','b'+R('o',3)+R('y',3)+'o'+'b','b'+R('o',7)+'b','b'+R('o',7)+'b','.b'+R('o',5)+'b.','..bbbbb..'],
  check:['........g','.......gg','g.....gg.','gg...gg..','.gg.gg...','..ggg....','...g.....'],
  monitor:['ccccccccc','c'+'o+ooooo'+'c','c'+'oo+oooo'+'c','c'+'o+ooooo'+'c','c'+R('o',7)+'c','ccccccccc','....c....','..ccccc..'],
  db:['.ggggggg.','g'+R('o',7)+'g',R('g',9),'g'+R('o',7)+'g',R('g',9),'g'+R('o',7)+'g','.ggggggg.'],
  cap:['....yyy....','..yyyyyyy..','.yyyyyyyyy.','yyyyyyyyyyy','...bbbbb...','...bbbbb...'],
  chat:['.'+R('+',9)+'.',R('+',11),'+'+R('#',5)+R('+',5),R('+',11),'+'+R('#',7)+R('+',3),R('+',11),'.'+R('+',9)+'.','.+++.......'],
  chip:['...#.#.#...','..#######..','#.#+++++#.#','###+++++###','#.#+++++#.#','###+++++###','#.#+++++#.#','..#######..','...#.#.#...'],
  laptop:['..############..','..#oooooooooo#..','..#o+oooooooo#..','..#oo+ooooooo#..','..#o+ooo++ooo#..','..#oooooooooo#..','..############..','.##############.','################']
};

const disc = (n, ch) => { const c = (n - 1) / 2; return Array.from({ length: n }, (_, y) => Array.from({ length: n }, (_, x) => (Math.hypot(x - c, y - c) <= c + 0.2 ? ch : ".")).join("")); };
const put = (rows, pts, ch) => { pts.forEach(([x, y]) => { rows[y] = rows[y].slice(0, x) + ch + rows[y].slice(x + 1); }); return rows; };
SP.whatsapp = put(put(disc(13, "g"), [[0, 12], [1, 12], [1, 11], [2, 11], [2, 10]], "g"),
  [[3, 3], [4, 3], [3, 4], [4, 4], [4, 5], [5, 5], [5, 6], [6, 6], [6, 7], [7, 7], [7, 8], [8, 8], [8, 9], [9, 8], [9, 9]], "w");
SP.mail = put(Array.from({ length: 9 }, () => "c".repeat(13)),
  [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [11, 1], [10, 2], [9, 3], [8, 4], [7, 5], [6, 6]], "o");
SP.github = put(put(disc(13, "w"), [[1, 1], [2, 1], [2, 2], [11, 1], [10, 1], [10, 2], [1, 0], [11, 0]], "w"),
  [[4, 6], [8, 6], [4, 5], [8, 5], [6, 8], [5, 9], [7, 9]], "o");

export function Sprite({ name, s = 4 }) {
  const rows = SP[name], rects = [];
  rows.forEach((row, y) => [...row].forEach((c, x) => {
    const p = PAL[c];
    if (p) rects.push(<rect key={x + "-" + y} x={x} y={y} width="1" height="1" style={{ fill: p.startsWith("--") ? `var(${p})` : p }} />);
  }));
  return <svg viewBox={`0 0 ${rows[0].length} ${rows.length}`} width={rows[0].length * s} height={rows.length * s} shapeRendering="crispEdges" aria-hidden="true">{rects}</svg>;
}
