const linkedListQuestions = [
    {
        id: 1,
        title: "Find the Length of Linked List",
        description:
            "Given the head of a linked list, return the number of nodes.",
        complexity: {
            time: "O(n)",
            space: "O(1)"
        },

        code: `public class Main {

    static int length(Node head){
        int count = 0;

        while(head != null){
            count++;
            head = head.next;
        }

        return count;
    }
}`
    },

    {
        id: 2,
        title: "Search an Element",
        description:
            "Check whether a given value exists in the linked list.",

        complexity: {
            time: "O(n)",
            space: "O(1)"
        },

        code: `public static boolean search(Node head,int key){

    while(head!=null){

        if(head.data==key)
            return true;

        head=head.next;
    }

    return false;
}`
    }
];

export default linkedListQuestions;