class Solution {
    public long maxTotalValue(int[] a, int k) {
        Arrays.sort(a);
        int min = a[0];
        int max = a[a.length-1];
        long ans = max-min;
        return ans * k;
    }
}