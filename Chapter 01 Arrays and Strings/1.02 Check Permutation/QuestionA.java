public class QuestionA {
  
  // 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

  public static boolean permutation(String s, String t) {
    return false;
  }

  public static void main(String[] args) {

    // Prints out "Question A" to the prompt
    System.out.println("Question A");

    // Declares an array within an array, initializing it with the variable name pairs and assigning it the values below
    String[][] pairs = {{"apple", "papel"}, {"carrot","tarroc"}, {"hello", "llloh"}, {"Hello", "Hello"}};

    for (String[] pair : pairs) {
      // Print out an empty line to separate each pair for readability
      System.out.println();

      String word1 = pair[0];
      String word2 = pair[1];
      boolean isAnAnagram = permutation(word1, word2);
      System.out.println("Are they anagrams? " + word1 + ", " + word2 + ": " + isAnAnagram);

      boolean isEqual = word1.equals(word2);
      System.out.println("Are they equal? " + word1 + ", " + word2 + ": " + isEqual);
    }
  }

}