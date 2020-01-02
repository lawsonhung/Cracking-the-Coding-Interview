class A {

  // 1.1 Is Unique: Implement an algorithm to determine if a string has unique characters. What if you cannot use additional data structures?

  // 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

  // 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
  // EXAMPLE
  // Input: "Mr John Smith     ", 13
  // Output: "Mr%20John%20Smith"

  public static boolean isUniqueChars(String inputStr){

    // If the string is more than 128 characters long, then there is a repeat character
    // Return false if this is the case
    if (inputStr.length() > 128){
      return false;
    }

    // Initialize char_set array with a size of 128
    boolean[] char_set = new boolean[128];

    // Iterate through the inputStr
    for (int i = 0; i < inputStr.length(); i++){
      // Converts the currentVal from a character to an int, according to ASCII
      int currentVal = inputStr.charAt(i);

      // Print out the current letter
      System.out.println("inputStr.charAt[i]: " + inputStr.charAt(i));

      // Print out the currentVal to the command prompt
      System.out.println("currentVal int ASCII value: " + currentVal);

      // Print out char_set[currentVal]
      System.out.println("char_set[currentVal]: " + char_set[currentVal]);

      // ????? Why is if statement not being met when char_set[currentVal] is true?
      // See if char_set[currentVal] is true or false
      if (char_set[currentVal]) {
        System.out.println("char_set[currentVal] is true: " + char_set[currentVal]);
        // Return false and break out of the loop
        return false;
      }

      // ??????? Not sure why I have to reassign to true when it already is true above
      // Assign char_set[currentVal] to true
      char_set[currentVal] = true;
    }

    // Else return true
    return true;
  }

  public static void main(String arg[]){
    // Prints out "Hello World" to the command prompt
    System.out.println("Hello World");

    // For loop; prints out:
    // 1
    // 2
    // 3
    // 4
    // 5
    for (int i = 0; i < 5; i++){
      System.out.println(i);
    }

    // Initialize and assign an array of strings
    String[] words = {"abcde", "hello", "apple", "kite", "paddle"};

    // Test to see what isUniqueChars would print, given the first item in the words array
    // isUniqueChars(words[0]);
    
    // Iterate through the words array and print out each word on a new line
    for (String word : words){
      // Print out the current word to the command prompt
      System.out.println("\n" + "words[i]: " + word);

      // Pass each word into isUniqueChars
      isUniqueChars(word);
    }

  }
}