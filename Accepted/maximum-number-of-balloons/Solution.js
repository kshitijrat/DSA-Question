class Solution {
    public int maxNumberOfBalloons(String s) {
        int a[] = new int[27];
        for (char c : s.toCharArray()) {
            int x = c - '0';
            a[x - 48]++;
        }
      //  System.out.println(Arrays.toString(a));
        

        // // 1, 2, 12, 14, 15
        int res = Math.min(a[1], Math.min(a[2], Math.min(a[12]/2, Math.min(a[14], a[15]/2))));
        return res;
    }
}