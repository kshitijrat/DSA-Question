class Solution {
    public int numberOfSubstrings(String s) {
       int ind[] = new int[3];
        Arrays.fill(ind, -1);
        char ch[] = s.toCharArray();
        int cnt = 0;
        for (int i = 0; i < ch.length; i++) {
            if ((ch[i] - '0') - 49 <= 2) {
                ind[(ch[i] - '0') - 49] = i;
                if(ind[0] != -1 && ind[1] != -1 && ind[2] != -1)cnt += Math.min(ind[0], Math.min(ind[1], ind[2]))+1;
                
            }
        }

        return cnt;
    }
}