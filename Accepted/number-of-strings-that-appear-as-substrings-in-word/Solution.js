class Solution {
    public int numOfStrings(String[] s, String w) {
        int cnt = 0;
        for(int i=0;i<s.length;i++){
            if(w.contains(s[i]))cnt++;
        }
        
        return cnt;
    }
}