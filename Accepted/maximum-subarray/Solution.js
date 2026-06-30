class Solution {
    public int maxSubArray(int[] a) {
        if(a.length == 0)return -1;
        int curr = a[0], max = a[0];
        for(int i=1;i<a.length;i++){
            curr = Math.max(a[i], curr+a[i]);
            max = Math.max(max, curr);
        }
        return max;

    }
}