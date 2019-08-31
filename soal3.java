public class JavaApplication {
 
    public static void main(String[] args) {
        int n = 11;
        for (int i = 0; i <= n; i++) {
            String bintang = "*";
            for (int j = 0; j < i; j++) {
                bintang = bintang + "*";
            }
            System.out.println(bintang);
        }
    }
}