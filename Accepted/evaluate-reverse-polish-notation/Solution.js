class Solution {
    public int evalRPN(String[] token) {
        Stack<Integer> stack = new Stack<>();
        for (String s : token) {
            if (isValidSymbol(s)) {
                if(stack.size()<2)return -1;
                int a = stack.pop();
                int b = stack.pop();
                System.out.println("a: "+a+", b: "+b);
                if(s.equals("+"))stack.push(a+b);
                else if(s.equals("-"))stack.push(b-a);
                else if(s.equals("/"))stack.push(b/a);
                else stack.push(a*b);
            } else {
                int x = Integer.parseInt(s);
                stack.push(x);
            }
        }
        return stack.peek();
    }

    public boolean isValidSymbol(String c) {
        if (c.equals("+") || c.equals("-") || c.equals("*") || c.equals("/"))
            return true;
        return false;
    }
}