class Solution {
    public double angleClock(int h, int m) {
        double formulat = 30*h - (11*m)/2.0;
     double angle = Math.abs(formulat);
     System.out.println(angle+", "+(360-angle));
     return Math.min(360-angle, angle);
    }
}