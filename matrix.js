class cl_matriz {
    matriz;
    _i;
    _j;

    constructor(i, j) {
        this.matriz = new Array(i);
        this._i = i;
        this._j = j;
        for (let idx1 = 0; idx1 < this.matriz.length; idx1++) {
            this.matriz[idx1] = new Array(j);
            for (let idx2 = 0; idx2 < this.matriz[idx1].length; idx2++) {
                this.matriz[idx1][idx2] = {
                    x: idx1,
                    y: idx2,
                    val: null,
                    // get val() { return this.val },
                    // set val(v) { this.val = v },
                    up: () => this.matriz[idx1][(idx2 == 0) ? (this._j - 1) : (idx2 - 1)],
                    down: () => this.matriz[idx1][(idx2 == (this._j - 1)) ? 0 : (idx2 + 1)],
                    left: () => this.matriz[(idx1 == 0) ? (this._i - 1) : (idx1 - 1)][idx2],
                    right: () => this.matriz[(idx1 == (this._i - 1)) ? 0 : (idx1 + 1)][idx2],
                    upleft: () => this.matriz[(idx1 == 0) ? (this._i - 1) : (idx1 - 1)][(idx2 == 0) ? (this._j - 1) : (idx2 - 1)],
                    upright: () => this.matriz[(idx1 == (this._i - 1)) ? 0 : (idx1 + 1)][(idx2 == 0) ? (this._j - 1) : (idx2 - 1)],
                    downleft: () => this.matriz[(idx1 == 0) ? (this._i - 1) : (idx1 - 1)][(idx2 == (this._j - 1)) ? 0 : (idx2 + 1)],
                    downright: () => this.matriz[(idx1 == (this._i - 1)) ? 0 : (idx1 + 1)][(idx2 == (this._j - 1)) ? 0 : (idx2 + 1)],
                };
            }
        }
    }
    getVal(x, y) {
        return this.matriz[x][y].val;
    }
    setVal(x, y, v) {
        this.matriz[x][y].val = v;
    }
    getCell(x, y) {
        return this.matriz[x][y];
    }
}