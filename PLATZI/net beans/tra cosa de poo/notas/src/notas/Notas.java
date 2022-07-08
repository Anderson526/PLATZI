
package notas;
import java.util.Scanner;

public class Notas {

Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
       //variables
       int notas[]={10,950,1};
       int var;
       int sum = 0;
       //numero menor
       int men=notas[0];
       for(int x=0;x<notas.length;x++){
                       if(notas[x]<men){
           men= notas[x];
       }       
                       
       }
        System.out.println("el num menor es:"+ men);
    
        //numero mayor
       int may= notas[0];
       for(int j=0; j<notas.length; j++){
            if(notas[j]>may){
           may= notas[j];
       }
       }
       
        System.out.println("el num mayor es:"+ may);
  
        //promedio
        
       for(int i =0; i< notas.length; i++){
   
            sum += notas[i];
           
           
       }
        var = sum/notas.length;
       
       System.out.println("nota definitiva;"+var);
        
    }
    
}
