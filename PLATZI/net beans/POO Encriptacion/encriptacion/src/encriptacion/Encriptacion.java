
package encriptacion;

import java.util.Scanner;


public class Encriptacion {


    public static void main(String[] args) {
      Scanner sc= new Scanner(System.in);
      
      //pedir datos
      System.out.println("ingrese la palabra que desea encriptar");
          String texto =sc.nextLine();
          //convertir string a char
          char array[] = texto.toCharArray();
          
          
          //revisar cada caracter del texto ingresado
          for(int i =0; i<array.length; i++){
              array[i] =(char)(array[i]+(char)5);
              
          }
          
          String encriptado = String.valueOf(array);
          System.out.println("texto encriptado:" + encriptado);
          
          
            //desencriptar proceso inverso
    
    char array2[] = encriptado.toCharArray();
   
        for(int x = 0; x<array.length; x++){
            
                     array[x] =(char)(array2[x]-(char)5);
        }
               String desencriptado = String.valueOf(array);
          System.out.println("texto desencriptado:" + desencriptado);
    
    }
    
    
  
    
}
