class Solution {
    public int largestAltitude(int[] a) {
        int n = a.length;
       int res = 0;
       int prev = 0;
        for(int i=0;i<n;i++){
            int x = a[i] + prev;
            res = Math.max(x, res);
            prev = x;
        }
        return res;
    }
}