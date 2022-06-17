// Time complexity: O(n)
// Space complexity: O(max(n,m))

static class Node{
  int data;
  Node next;

  Node(int data){
    this.data = data;
    this.next = null;
  }

  Node(int data, Node next){
    this.data = data;
    this.next = next;
  }
}

static class LinkedList{
  Node head;

  LinkedList(){
    this.head = null;
  }

  LinkedList(Node head){
    this.head = head;
  }
}

static LinkedList addTwoLinkedLists(LinkedList list1, LinkedList list2){
  LinkedList output = new LinkedList();
  Node ptr1 = list1.head;
  Node ptr2 = list2.head;
  Node tail = null;
  int carry = 0;
  while(ptr1 != null || ptr2 != null || carry > 0){
    int digit1 = ptr1 != null ? ptr1.data : 0;
    int digit2 = ptr2 != null ? ptr2.data : 0;
    int nextDigit = (digit1 + digit2 + carry)%10;
    carry = (digit1 + digit2 + carry)/10;
    Node newNode = new Node(nextDigit);
    if(output.head == null){
      output.head = newNode;
      tail = newNode;
    }else{
      tail.next = newNode;
      tail = tail.next;
    }
    ptr1 = ptr1 != null ? ptr1.next : null;
    ptr2 = ptr2 != null ? ptr2.next : null;
  }
  return output;
}


