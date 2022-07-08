
package javaapplication2;

import java.util.Scanner;


public class JavaApplication2 {

  
    public static void main(String[] args) {
      Scanner sc= new Scanner(System.in);
 
      
      if(args.length==0){
          
      System.out.println("ingresa tu texto");
            String x = sc.nextLine();
            
            System.out.println("codigo cifrado:");
            
            char posicion;
            int ascii;
            char des;
            String bin;
     
  
            //conversion a sistema ASCII
      for(int i=0;i<x.length();i++){
          posicion = x.charAt(i);
          ascii=posicion;
          des = (char) ascii;
  

          //System.out.println(ascii);
           
          
               //inicializar var
              bin="";
       
              
       //Encriptacion a binario desde ASCII
          
              for(int j=7; j>=0; j--){
          if(ascii>=Math.pow(2,j)){
              
              ascii-=Math.pow(2,j);
              
              bin=bin.concat("1");
          }else{
              bin=bin.concat("0");
          }
                   

    
      }
      System.out.print("letra descifrada -->" + des +"----------");
       System.out.println("caracter cifrado -->" + bin);
      
     // System.out.print( bin); -en caso de emergencia
      
      
   
    
       
   
             
         
         
             
          
            }
          

       
      

      }
      
       
    }
    
} 
