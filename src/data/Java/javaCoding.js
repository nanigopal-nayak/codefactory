const javaCoding = [
    {
        title: "Check Palindrome Number in Java",
        question: "Write a Java program to check whether a number is a palindrome or not.",
        code: `import java.util.*;

class Palindrome {
   public static void main(String[] args) {
      int rem, rev = 0;
      Scanner sc = new Scanner(System.in);

      System.out.println("Enter a Number:");
      int num = sc.nextInt();

      int temp = num;

      while (num > 0) {
         rem = num % 10;
         rev = rev * 10 + rem;
         num = num / 10;
      }

      if (temp == rev) {
         System.out.println(temp + " is a Palindrome Number");
      } else {
         System.out.println(temp + " is NOT a Palindrome Number");
      }
   }
}`,
        explanation:
            "A palindrome number is a number that remains the same when its digits are reversed. The program reverses the number using a while loop and compares it with the original number."
    },
    {
        title: "Check Prime Number in Java",
        question: "Write a Java program to check whether a number is prime or not.",
        code: `import java.util.*;

class Primenumber {
   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int num;
      boolean flag = true;

      System.out.println("Enter the number:-");
      num = sc.nextInt();

      if (num <= 1) {
         flag = false;
      } else {
         for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
               flag = false;
               break;
            }
         }
      }

      if (flag) {
         System.out.println(num + " is a Prime Number");
      } else {
         System.out.println(num + " is Not a Prime Number");
      }
   }
}`,
        explanation:
            "A prime number is a number greater than 1 which has no divisors other than 1 and itself. The program checks divisibility from 2 to num/2 and sets a flag accordingly."
    },
    {
  title: "Check Armstrong Number in Java",
  question: "Write a Java program to check whether a number is Armstrong or not.",
  code: `import java.util.*;

class Armstrong {
   public static void main(String[] args) {
      int rem, i = 0, sum = 0;
      Scanner sc = new Scanner(System.in);

      System.out.println("Enter the Number:-");
      int num = sc.nextInt();

      int temp = num;

      while (num > 0) {
         num = num / 10;
         i++;
      }

      num = temp;

      while (temp > 0) {
         rem = temp % 10;
         sum = sum + (int)Math.pow(rem, i);
         temp = temp / 10;
      }

      if (sum == num) {
         System.out.println("Armstrong Number");
      } else {
         System.out.println("Not an Armstrong Number");
      }
   }
}`,
  explanation:
    "An Armstrong number is a number in which the sum of its digits raised to the power of the number of digits is equal to the original number. The program counts digits first, then calculates the power sum and compares."
},
{
  title: "Calculate Factorial of a Number in Java",
  question: "Write a Java program to calculate the factorial of a number.",
  code: `import java.util.*;

class Factorial {
   public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter the number:- ");
      int num = sc.nextInt();

      int fact = 1;

      for (int i = 1; i <= num; i++) {
         fact = fact * i;
      }

      System.out.println("Factorial of " + num + " is " + fact);
   }
}`,
  explanation:
    "Factorial of a number is the product of all integers from 1 to that number. The program uses a for loop to multiply values from 1 to n and stores the result in fact."
}
];

export default javaCoding;