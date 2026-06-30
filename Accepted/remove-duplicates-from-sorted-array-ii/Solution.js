class Solution {
    public int removeDuplicates(int[] a) {
          int n = a.length;
        int cnt = 1;
        int i=1;
        int p = 0;
        int prev = a[0];
        while(i<n){
            
            if(a[i]==prev){
                cnt+=1;
            }else{
                cnt = 1;
                prev = a[i];
            }
            if(cnt >= 3){
                
               
                System.out.print(a[i] +",");
                a[i] = Integer.MAX_VALUE;
                System.out.println(a[i]);
                p+=1;
            }
            i++;
        }
        System.out.println(Arrays.toString(a));
        Arrays.sort(a);
        System.out.println(Arrays.toString(a));
        System.out.println("return length is: "+(n-p));
        return n-p;
    }
}