// Disjoint set Union by Rank.
class DisjointSet {
  constructor(n) {
    this.parent = Array(n)
      .fill(0)
      .map((_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(u, v) {
    const parentU = this.find(u);
    const parentV = this.find(v);
    if (parentU === parentV) return;
    if (this.rank[parentU] < this.rank[parentV]) {
      this.parent[parentU] = parentV;
    } else if (this.rank[parentU] > this.rank[parentV]) {
      this.parent[parentV] = parentU;
    } else {
      this.parent[parentV] = parentU;
      this.rank[parentU]++;
    }
  }
}

const ds = new DisjointSet(7);
ds.union(1, 2);
if (ds.find(3) === ds.find(7)) console.log("Yes");
else console.log("No");

ds.union(2, 3);
ds.union(4, 5);
ds.union(6, 7);
ds.union(5, 6);
if (ds.find(3) === ds.find(7)) console.log("Yes");
else console.log("No");

ds.union(3, 7);
if (ds.find(3) === ds.find(7)) console.log("Yes");
else console.log("No");
